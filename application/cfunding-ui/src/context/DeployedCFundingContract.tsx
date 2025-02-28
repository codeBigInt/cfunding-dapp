// "use client";
// import { createContext, type PropsWithChildren } from "react"
// import { BrowserDeployedCFundingManager, DeployedCFundingAPIProvider } from "./BrowserDeployedContractProvider"
// import { Logger } from "pino"
// import { SingleDeploymentManager } from "./SingleBrowserDeployedContract";

// /**
//  * Encapsulates a deployed boards provider as a context object.
//  */
// export const DeployedCFuandingContractContext = createContext<DeployedCFundingAPIProvider | undefined>(undefined);

// /**
//  * The props required by the {@link DeployedBoardProvider} component.
//  */
// export type DeployedBoardProviderProps = PropsWithChildren<{
//   /** The `pino` logger to use. */
//   logger: Logger;
// }>;


// const DeployedCFundingCotractProvider = ({children, logger}: {children: React.ReactNode, logger: Logger}) => {
//     return <DeployedCFuandingContractContext value={new SingleDeploymentManager(logger)}>{children}</DeployedCFuandingContractContext>
// }

// export default DeployedCFundingCotractProvider;