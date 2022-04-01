import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/**
 * The chain ID 4 represents the rinkeby network
 * The 'injected' connector is a web3 connection method used by METAMASK
 */
const supportedChainIds =[4]
const connectors ={
    injected:{},
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
  >
    <Component { ... pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp