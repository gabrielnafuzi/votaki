import type { NextPage } from 'next'

import { Layout } from '@/features/auth/components/layout'
import { SignInForm } from '@/features/auth/components/sign-in-form'

const SignInPage: NextPage = () => {
  return (
    <Layout title="Sign In" subtitle="Securely login to your account">
      <SignInForm />
    </Layout>
  )
}

export default SignInPage
