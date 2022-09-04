import type { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'

import { requireAuth } from '@/common/require-auth'
import { Button } from '@/components/button'

const MeDashboardPage: NextPage = () => {
  const { data } = useSession()

  return (
    <div className="min-h-screen">
      <div>
        <div className="max-w-lg">
          <h1 className="text-5xl text-center font-bold leading-snug text-gray-400">
            You are logged in!
          </h1>

          <p className="my-4 text-center leading-loose">
            You are allowed to visit this page because you have a session,
            otherwise you would be redirected to the login page.
          </p>

          <div className="my-4 bg-gray-700 rounded-lg p-4">
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </div>

          <div className="text-center">
            <Button onClick={() => signOut({ callbackUrl: '/sign-in' })}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = requireAuth(async () => {
  return { props: {} }
})

export default MeDashboardPage
