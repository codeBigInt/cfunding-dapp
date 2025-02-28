import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import DeployedCFundingCotractProvider from './context/DeployedCFundingContract.tsx'
import * as pino from "pino"
import { NetworkId, setNetworkId } from '@midnight-ntwrk/midnight-js-network-id'
import SingleCFuningContractContextProvider from './context/SingleCFuningContractContext.tsx'

const logger = pino.pino({
  level: import.meta.env.VITE_LOGGING_LEVEL as string,
})

const networkId = import.meta.env.VITE_NETWORK_ID as NetworkId;
logger.info("Here is the network id:", networkId)
setNetworkId(NetworkId.TestNet)
logger.trace("networkId = ", networkId)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SingleCFuningContractContextProvider logger={logger}>
      <App />
    </SingleCFuningContractContextProvider>
  </StrictMode>,
)
