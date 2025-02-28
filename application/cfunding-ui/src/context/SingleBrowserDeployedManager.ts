import { type ContractAddress } from '@midnight-ntwrk/compact-runtime';
import { type Logger } from 'pino';
import { CFundingAPI, CFundingProviders } from "@cfunding/cfunding-api";
import { connectToWallet } from '../actions/action';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import {
    createBalancedTx,
    type UnbalancedTransaction,
    type BalancedTransaction
} from '@midnight-ntwrk/midnight-js-types';
import { Transaction, CoinInfo } from '@midnight-ntwrk/ledger';
import { Transaction as ZswapTransaction } from '@midnight-ntwrk/zswap';
import { getLedgerNetworkId, getZswapNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

// Simplified deployment states
export type DeploymentStatus = 'idle' | 'in-progress' | 'deployed' | 'failed';

export type SingleDeploymentProvider = {

}

export class SingleDeploymentManager {
    private status: DeploymentStatus = 'idle';
    private deployedApi: CFundingAPI | null = null;
    private error: Error | null = null;
    private providers: CFundingProviders | null = null;

    constructor(private readonly logger: Logger) { }

    /**
     * Gets the current deployment status
     */
    getStatus(): {
        status: DeploymentStatus;
        api?: CFundingAPI;
        error?: Error;
    } {
        return {
            status: this.status,
            ...(this.deployedApi && { api: this.deployedApi }),
            ...(this.error && { error: this.error })
        };
    }

    /**
     * Initialize providers if not already initialized
     */
    private async initializeProviders(): Promise<CFundingProviders> {
        if (this.providers) {
            return this.providers;
        }

        const { wallet, uris } = await connectToWallet();
        const walletState = await wallet.state();
        this.logger.info("Connected Wallet Details:", walletState);
        this.logger.info("Started compiling provider")
        this.providers = {
            privateStateProvider: levelPrivateStateProvider({
                privateStateStoreName: 'cfunding-private-state',
            }),
            zkConfigProvider: new FetchZkConfigProvider(window.location.origin, fetch.bind(window)),
            proofProvider: httpClientProofProvider(uris.proverServerUri),
            publicDataProvider: indexerPublicDataProvider(uris.indexerUri, uris.indexerWsUri),
            walletProvider: {
                coinPublicKey: walletState.coinPublicKey,
                balanceTx(tx: UnbalancedTransaction, newCoins: CoinInfo[]): Promise<BalancedTransaction> {
                    return wallet
                      .balanceTransaction(
                        ZswapTransaction.deserialize(tx.serialize(getLedgerNetworkId()), getZswapNetworkId()),
                        newCoins,
                      )
                      .then((tx) => wallet.proveTransaction(tx))
                      .then((zswapTx) => Transaction.deserialize(zswapTx.serialize(getZswapNetworkId()), getLedgerNetworkId()))
                      .then(createBalancedTx);
                  },
            },
            midnightProvider: {
                submitTx: (tx) => wallet.submitTransaction(tx)
            }
        };
        this.logger.info("Created provider:", this.providers, {networdId: getLedgerNetworkId(), ledgerId: getLedgerNetworkId(), transactDt: this.providers.publicDataProvider.watchForTxData});
        
        return this.providers;
    }

    /**
     * Deploy a new CFunding contract
     */
    async deploy(): Promise<void> {
        if (this.status === 'in-progress' || this.status === 'deployed') {
            throw new Error('Deployment already in progress or completed');
        }
    
        try {
            this.logger.info("Started deployment!");
            this.status = 'in-progress';
            this.error = null;
    
            // Step 1: Deploy the contract
            const providers = await this.initializeProviders();
            this.deployedApi = await CFundingAPI.deploy(providers, this.logger);
            this.logger.info("Contract deployed!");
    
            // Step 2: Initialize the owner
            await this.deployedApi.initializeOwner();
            this.logger.info("Owner initialized!");
    
            this.status = 'deployed';
        } catch (error) {
            this.status = 'failed';
            this.error = error instanceof Error ? error : new Error(String(error));
            throw this.error;
        }
    }

    /**
     * Join an existing CFunding contract
     */
    async join(contractAddress: ContractAddress): Promise<void> {
        if (this.status === 'in-progress' || this.status === 'deployed') {
            throw new Error('Deployment already in progress or completed');
        }

        try {
            this.status = 'in-progress';
            this.error = null;

            const providers = await this.initializeProviders();
            this.deployedApi = await CFundingAPI.join(providers, contractAddress, this.logger);
            this.status = 'deployed';
        } catch (error) {
            this.status = 'failed';
            this.error = error instanceof Error ? error : new Error(String(error));
            throw this.error;
        }
    }
}