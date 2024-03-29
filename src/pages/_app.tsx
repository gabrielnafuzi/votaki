import { ReactQueryDevtools } from 'react-query/devtools'

import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { withTRPC } from '@trpc/next'
import withTwindApp from '@twind/next/app'
import superjson from 'superjson'

import { Head } from '@/components/head'
import { AppRouter } from '@/server/router'
import twindConfig from '@/twind.config'
import { Toaster } from '@/utils/toast'

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <>
      <Head />

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>

      <Toaster />

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  )
}

const TwindApp = withTwindApp(twindConfig, MyApp)

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '' // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      headers: {
        'x-ssr': '1',
      },
    }
  },
  ssr: false,
})(TwindApp)
