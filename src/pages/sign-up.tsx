import type { NextPage } from 'next'

import { Layout } from '@/features/auth/components/layout'
import { SignUpForm } from '@/features/auth/components/sign-up-form'

const SignUpPage: NextPage = () => {
  return (
    <Layout
      title="Sign Up"
      subtitle="Complete the below form to create your account"
    >
      <SignUpForm />
    </Layout>
  )
}

export default SignUpPage
