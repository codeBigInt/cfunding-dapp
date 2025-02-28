import { Contract, ledger, withnesses, type CFundingContractPrivateState, createCFundingPrivateKey} from "@cfunding/cfunding-contract"
import { CoinInfo, ContractAddress, tokenType } from "@midnight-ntwrk/compact-runtime";
import { combineLatest, from, map, type Observable } from "rxjs"
import { CFundingContract, CFundingDerivedState, CFundingProviders, DeployedCFundingContract } from "./common-types";
import { Logger } from "pino";
import { toHex } from "@midnight-ntwrk/midnight-js-utils";
import { encodeTokenType } from "@midnight-ntwrk/ledger";
import { utils } from "./utils";
import { deployContract, findDeployedContract } from "@midnight-ntwrk/midnight-js-contracts";

const cfundingContractInstance: CFundingContract = new Contract(withnesses);

export interface CustomCoinInfo extends CoinInfo {
    color: string
}

export interface DeployedCFundingAPI {
    readonly deployedContractAddress: ContractAddress;
    readonly state$: Observable<CFundingDerivedState>;
    addContribution: (coin: CustomCoinInfo) => Promise<void>
    withdrawFunds: () => Promise<void>
}

export class CFundingAPI implements DeployedCFundingAPI {
    public readonly deployedContractAddress: ContractAddress;
    public readonly state$: Observable<CFundingDerivedState>;

    private constructor(
        public readonly deployedCFundingContract: DeployedCFundingContract,
        providers: CFundingProviders,
        private readonly logger?: Logger,
    ) {
        this.deployedContractAddress = deployedCFundingContract.deployTxData.public.contractAddress;

        // Fix the combineLatest setup
        this.state$ = combineLatest([
            providers.publicDataProvider.contractStateObservable(this.deployedContractAddress, { type: 'latest' }).pipe(
                map((contractState) => ledger(contractState.data))
            ),
            from(providers.privateStateProvider.get("cfundingPrivateState") as Promise<CFundingContractPrivateState>)
        ]).pipe(
            map(([ledgerState, privateState]) => {
                // Return object matching CFundingDerivedState interface
                return {
                    fundGoal: ledgerState.fundGoal,      // Add this
                    fundPoolTotal: ledgerState.fundPoolTotal,  // Add this
                    privateState,
                    contributors: ledgerState.contributors,
                    creator: ledgerState.ownerPublicKey,
                    owner: ledgerState.owner,
                    instance: ledgerState.instance
                };
            })
        );
    }
    
    coin(): Pick<CustomCoinInfo, "color" | "nonce" | "value"> {
        return {
            nonce: toHex(utils.randomBytes(32)),
            value: 100n,
            color: toHex(encodeTokenType(tokenType(utils.pad('brick_towers_coin', 32), this.deployedContractAddress)))
        };
    }

    public async addContribution(coin: CustomCoinInfo): Promise<void> {
        await this.logger?.info(`addindContribution: ${coin.value}`);
        const txData = await this.deployedCFundingContract.callTx.addContribution({
            nonce: utils.fromHex(coin.nonce),
            color: utils.fromHex(coin.color),
            value: coin.value
        });
        this.logger?.trace({
            transactionAdded: {
              circuit: 'add_contribution',
              txHash: txData.public.txHash,
              blockHeight: txData.public.blockHeight,
            },
          });
    }

    public async withdrawFunds(): Promise<void> {
        // Implementation here
        await this.logger?.info(`Withdrawing funds`);
        const txData = await this.deployedCFundingContract.callTx.withdrawFunds()
        this.logger?.trace({
            transactionAdded: {
              circuit: 'withdraw_funds',
              txHash: txData.public.txHash,
              blockHeight: txData.public.blockHeight,
            },
          });
    }

    static async deploy(
        providers: CFundingProviders,
        logger: Logger,
    ): Promise<CFundingAPI> {
        const deployedCFundingContract = await deployContract(providers, {
            privateStateKey: "cfundingPrivateState",
            contract: cfundingContractInstance,
            initialPrivateState: await CFundingAPI.getPrivateState(providers)
        });

        logger.trace({
            contractDeployed: {
                finalizedDeployTxData: deployedCFundingContract.deployTxData.public,
            },
        });
        logger.info({
            contractAddrss: deployedCFundingContract.deployTxData.public.contractAddress,
            txHash: deployedCFundingContract.deployTxData.public.status,
            blockHash: deployedCFundingContract.deployTxData.public.tx,
            initState: deployedCFundingContract.deployTxData.public.initialContractState,
            txFee: deployedCFundingContract.deployTxData.public.tx.fees,
            privateKey: deployedCFundingContract.deployTxData.private.initialZswapState.coinPublicKey,
            privateBal: deployedCFundingContract.deployTxData.private.newCoins
        });
        
        return new CFundingAPI(deployedCFundingContract, providers, logger);
    }
    
    public async initializeOwner(): Promise<void> {
        await this.logger?.info(`Initializing owner...`);
        const txData = await this.deployedCFundingContract.callTx.initializeOwner();
        this.logger?.trace({
            transactionAdded: {
                circuit: 'initialize_owner',
                txHash: txData.public.txHash,
                blockHeight: txData.public.blockHeight,
            },
        });
    }

    static async join(providers: CFundingProviders, contractAddress: ContractAddress, logger?: Logger): Promise<CFundingAPI> {
        logger?.info({
            joinContract: {
                contractAddress,
            },
        });

        const deployedCFundingContract = await findDeployedContract(providers, {
            contractAddress,
            contract: cfundingContractInstance,
            privateStateKey: "cfundingPrivateState",
            initialPrivateState: await CFundingAPI.getPrivateState(providers),
        });

        logger?.info({
            contractAddrss: deployedCFundingContract.deployTxData.public.contractAddress,
            txHash: deployedCFundingContract.deployTxData.public.status,
            blockHash: deployedCFundingContract.deployTxData.public.tx,
            initState: deployedCFundingContract.deployTxData.public.initialContractState,
            txFee: deployedCFundingContract.deployTxData.public.tx.fees,
            privateKey: deployedCFundingContract.deployTxData.private.initialPrivateState
        });

        logger?.trace({
            contractJoined: {
                finalizedDeployTxData: deployedCFundingContract.deployTxData.public,
            },
        });

        return new CFundingAPI(deployedCFundingContract, providers, logger);
    }

    private static async getPrivateState(providers: CFundingProviders): Promise<CFundingContractPrivateState> {
        const existingPrivateState = await providers.privateStateProvider.get("cfundingPrivateState");
        return existingPrivateState ?? createCFundingPrivateKey(utils.randomBytes(32));
    }
}

export * as utils from './utils/index.js';
export * from './common-types.js';