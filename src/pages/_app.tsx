import type { AppProps } from 'next/app'

import withTwindApp from '@twind/next/app'

import twindConfig from '@/twind.config'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig, MyApp)
