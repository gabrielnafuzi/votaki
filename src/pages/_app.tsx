import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import { withTRPC } from '@trpc/next'
import withTwindApp from '@twind/next/app'
import superjson from 'superjson'

import { AppRouter } from '@/server/router'
import twindConfig from '@/twind.config'

type PageProps = {
  session: Session
}
type AppPropsWithSession = Omit<AppProps, 'pageProps'> & {
  pageProps: PageProps
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithSession) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

const TwindApp = withTwindApp(twindConfig, MyApp)

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return ''
  }

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      transformer: superjson,
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(TwindApp)
