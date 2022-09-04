import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { tw } from 'twind'

import { trpc } from '@/utils/trpc'

const HomePage = () => {
  const { status } = useSession()

  const { data, error, isLoading } = trpc.useQuery(['user.me'], {
    enabled: status === 'authenticated',
  })

  const name = data?.username ?? 'guest'

  return (
    <div
      className={tw`pt-6 text-2xl text-blue-500 flex justify-center items-center w-full h-screen`}
    >
      {isLoading || status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <div className={tw`flex flex-col items-center`}>
          <p>Hello, {name}</p>

          <p>
            {!data?.username && (
              <Link href="/sign-in">
                <a className={tw`underline text-gray-600 text-sm`}>Sign in</a>
              </Link>
            )}
          </p>
        </div>
      )}

      {error && error.message}
    </div>
  )
}

export default HomePage
