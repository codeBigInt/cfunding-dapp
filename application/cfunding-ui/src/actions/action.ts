import { ServiceUriConfig, type DAppConnectorWalletAPI, DAppConnectorAPI } from "@midnight-ntwrk/dapp-connector-api"
import { catchError, concatMap, filter, firstValueFrom, interval, map, of, take, tap, throwError, timeout } from "rxjs"
import { Logger } from "pino";
import semver from "semver";

const logger = {
    info: console.log,
    error: console.error
} as Logger


export const connectToWallet = async (): Promise<{ wallet: DAppConnectorWalletAPI, uris: ServiceUriConfig }> => {
    const COMPATIBLE_CONNECTOR_API_VERSION = '1.x';
    // @ts-expect-error: error from the rxjs return
    return firstValueFrom(
        interval(100).pipe(
            // Applies the observation event to the midnight wallet
            map(() => window.midnight?.mnLace),
            // Scheduler that logs after every intervl
            tap((connectorAPI) => {
                logger.info(connectorAPI, "Checking for wallet connector API")
            }),
            // Ensures only truthy mapped wallet objects from the window object passes through
            filter((connectorAPI): connectorAPI is DAppConnectorAPI => !!connectorAPI),
            // Runs sync functions on mapped valid wallet object: Ensures that the wallet API version is valid and compatible
            concatMap((connectorAPI) =>
                semver.satisfies(connectorAPI.apiVersion, COMPATIBLE_CONNECTOR_API_VERSION)
                    ? of(connectorAPI)
                    : throwError(() => {
                        logger.error(`Imcompatible version: expected ${COMPATIBLE_CONNECTOR_API_VERSION} but got ${connectorAPI.apiVersion}`)
                        return new Error(`Incompatible wallet version`)
                    })
            ),
            tap((connectorAPI) => logger.info(`Compatible wallet found: version ${connectorAPI.apiVersion}`)),
            take(1),
            // If wallet doesn't appear in 1 second, assume it's not installed
            timeout({
                first: 1000,
                with: () => throwError(() => new Error('Midnight Lace wallet not found. Is the extension installed?')),
            }),

            // Check if the wallet is already enabled
            concatMap(async (connectorAPI) => {
                const isEnabled: boolean = await connectorAPI.isEnabled();
                logger.info("Wallet enblement status:", isEnabled)
                // ✅ Returning connectorAPI so it can be used in the next concatMap
                return connectorAPI;
            }),

            // Setting timeout for when we expect the wallet to return status if its enable
            timeout({
                first: 5000,
                with: () => throwError(() => new Error(`Midnight Lace wallet failed to respond, Is it enabeled?`))
            }),

            // Enable wallet connection
            concatMap(async (connectorAPI) => ({ walletConnectorAPI: await connectorAPI.enable(), connectorAPI })),


            // Catch any errors
            catchError((error) => {
                logger.error('Wallet connection failed:', error);
                return throwError(() => new Error('Application is not authorized'));
            }),
            // Retrieve service configuration after connecting
            concatMap(async ({ walletConnectorAPI, connectorAPI }) => {
                const uris = await connectorAPI.serviceUriConfig();
                logger.info('Connected to wallet and retrieved service configuration');
                return { wallet: walletConnectorAPI, uris };
            })
        )
    )
}


// export const initializeProviders = async (): Promise<CFundingProviders> => {
//     const { wallet, uris } = await connectToWallet();
//     const walletState = await wallet.state();

//     return {
//         privateStateProvider: levelPrivateStateProvider({
//             privateStateStoreName: 'bboard-private-state',
//         }),
//         zkConfigProvider: new FetchZkConfigProvider(window.location.origin, fetch.bind(window)),
//         proofProvider: httpClientProofProvider(uris.proverServerUri),
//         publicDataProvider: indexerPublicDataProvider(uris.indexerUri, uris.indexerWsUri),
//         walletProvider: {
//             coinPublicKey: walletState.coinPublicKey,
//             balanceTx(tx: UnbalancedTransaction, newCoins: CoinInfo[]): Promise<BalancedTransaction> {
//                 return wallet
//                     .balanceTransaction(
//                         ZswapTransaction.deserialize(tx.serialize(getLedgerNetworkId()), getZswapNetworkId()),
//                         newCoins,
//                     )
//                     .then((tx) => wallet.proveTransaction(tx))
//                     .then((zswapTx) => Transaction.deserialize(zswapTx.serialize(getZswapNetworkId()), getLedgerNetworkId()))
//                     .then(createBalancedTx(tx));
//             },
//         },
//         midnightProvider: {
//             submitTx(tx: BalancedTransaction): Promise<TransactionId> {
//                 return wallet.submitTransaction(tx);
//             },
//         },
//     };
// };