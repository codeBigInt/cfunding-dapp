import { type ContractAddress } from '@midnight-ntwrk/compact-runtime';
import {
  BehaviorSubject,
  type Observable,
} from 'rxjs';
import { type Logger } from 'pino';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import {
  type BalancedTransaction,
  type UnbalancedTransaction,
  createBalancedTx,
} from '@midnight-ntwrk/midnight-js-types';
import { type CoinInfo, Transaction, type TransactionId } from '@midnight-ntwrk/ledger';
import { Transaction as ZswapTransaction } from '@midnight-ntwrk/zswap';
// import semver from 'semver';
import { getLedgerNetworkId, getZswapNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { CFundingAPI, CFundingProviders } from "@cfunding/cfunding-api";
import { connectToWallet } from '../actions/action';

/**
 * An in-progress bulletin board deployment.
 */
export interface InProgressCFundingDeployment {
  readonly status: 'in-progress';
}

/**
 * A deployed bulletin board deployment.
 */
export interface DeployedCFundingDeployment {
  readonly status: 'deployed';

  /**
   * The {@link DeployedBBoardAPI} instance when connected to an on network bulletin board contract.
   */
  readonly api: CFundingAPI;
}

/**
 * A failed bulletin board deployment.
 */
export interface FailedCFundingDeployment {
  readonly status: 'failed';

  /**
   * The error that caused the deployment to fail.
   */
  readonly error: Error;
}

/**
 * A bulletin board deployment.
 */
export type CFundingDeployment = InProgressCFundingDeployment | DeployedCFundingDeployment | FailedCFundingDeployment;

/**
 * Provides access to bulletin board deployments.
 */
export interface DeployedCFundingAPIProvider {
  /**
   * Gets the observable set of board deployments.
   *
   * @remarks
   * This property represents an observable array of {@link BoardDeployment}, each also an
   * observable. Changes to the array will be emitted as boards are resolved (deployed or joined),
   * while changes to each underlying board can be observed via each item in the array.
   */
  readonly cfuncdingDeployments$: Observable<Array<Observable<CFundingDeployment>>>;

  /**
   * Joins or deploys a bulletin board contract.
   *
   * @param contractAddress An optional contract address to use when resolving.
   * @returns An observable board deployment.
   *
   * @remarks
   * For a given `contractAddress`, the method will attempt to find and join the identified bulletin board
   * contract; otherwise it will attempt to deploy a new one.
   */
  readonly resolve: (contractAddress?: ContractAddress) => Observable<CFundingDeployment>;
}

/**
 * A {@link DeployedBoardAPIProvider} that manages bulletin board deployments in a browser setting.
 *
 * @remarks
 * {@link BrowserDeployedBoardManager} configures and manages a connection to the Midnight Lace
 * wallet, along with a collection of additional providers that work in a web-browser setting.
 */
export class BrowserDeployedCFundingManager implements DeployedCFundingAPIProvider {
  readonly #cfundingDeploymentsSubject: BehaviorSubject<Array<BehaviorSubject<CFundingDeployment>>>;
  #initializedProviders: Promise<CFundingProviders> | undefined;

  /**
   * Initializes a new {@link BrowserDeployedBoardManager} instance.
   *
   * @param logger The `pino` logger to for logging.
   */
  constructor(private readonly logger: Logger) {
    this.#cfundingDeploymentsSubject = new BehaviorSubject<Array<BehaviorSubject<CFundingDeployment>>>([]);
    this.cfuncdingDeployments$ = this.#cfundingDeploymentsSubject;
  }

  /** @inheritdoc */
  readonly cfuncdingDeployments$: Observable<Array<Observable<CFundingDeployment>>>;

  /** @inheritdoc */
  resolve(contractAddress?: ContractAddress): Observable<CFundingDeployment> {
    const deployments = this.#cfundingDeploymentsSubject.value;
    let deployment = deployments.find(
      (deployment) =>
        deployment.value.status === 'deployed' && deployment.value.api.deployedContractAddress === contractAddress,
    );

    if (deployment) {
      return deployment;
    }

    deployment = new BehaviorSubject<CFundingDeployment>({
      status: 'in-progress',
    });

    if (contractAddress) {
      void this.joinDeployment(deployment, contractAddress);
    } else {
      void this.deployDeployment(deployment);
    }

    this.#cfundingDeploymentsSubject.next([...deployments, deployment]);

    return deployment;
  }

  private getProviders(): Promise<CFundingProviders> {
    // We use a cached `Promise` to hold the providers. This will:
    //
    // 1. Cache and re-use the providers (including the configured connector API), and
    // 2. Act as a synchronization point if multiple contract deploys or joins run concurrently.
    //    Concurrent calls to `getProviders()` will receive, and ultimately await, the same
    //    `Promise`.
    return this.#initializedProviders ?? (this.#initializedProviders = initializeProviders(this.logger));
  }

  private async deployDeployment(deployment: BehaviorSubject<CFundingDeployment>): Promise<void> {
    try {
      const providers = await this.getProviders();
      const api = await CFundingAPI.deploy("poolid", providers, this.logger);

      deployment.next({
        status: 'deployed',
        api,
      });
    } catch (error: unknown) {
      deployment.next({
        status: 'failed',
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  }

  private async joinDeployment(
    deployment: BehaviorSubject<CFundingDeployment>,
    contractAddress: ContractAddress,
  ): Promise<void> {
    try {
      const providers = await this.getProviders();
      const api = await CFundingAPI.join(providers, contractAddress, this.logger);

      deployment.next({
        status: 'deployed',
        api,
      });
    } catch (error: unknown) {
      deployment.next({
        status: 'failed',
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  }
}

/** @internal */
export const initializeProviders = async (logger: Logger): Promise<CFundingProviders> => {
  const { wallet, uris } = await connectToWallet();
  const walletState = await wallet.state();
  logger.info("Connected Wallet Details:", walletState)
  return {
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
        .balanceAndProveTransaction(
          ZswapTransaction.deserialize(tx.serialize(getLedgerNetworkId()), getZswapNetworkId()),
          newCoins,
        )
        .then((zswapTx) => Transaction.deserialize(zswapTx.serialize(getZswapNetworkId()), getLedgerNetworkId()))
        .then(createBalancedTx)
        .finally(() => {
          console.log('balanceTxDone');
        });
      },
    },
    midnightProvider: {
      submitTx(tx: BalancedTransaction): Promise<TransactionId> {
        return wallet.submitTransaction(tx);
      },
    },
  };
};
