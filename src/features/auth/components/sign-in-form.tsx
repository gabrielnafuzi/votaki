import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { zodResolver } from '@hookform/resolvers/zod'
import { tw } from 'twind'

import { signInSchema, SignInSchema } from '@/common/validation/auth'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { PasswordInput } from '@/components/password-input'
import { toast } from '@/utils/toast'

export const SignInForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<SignInSchema> = useCallback(
    async (data) => {
      const resp = await signIn('credentials', {
        ...data,
        callbackUrl: '/me/dashboard',
        redirect: false,
      })

      if (resp?.status === 200) {
        router.push('/me/dashboard')

        return
      }

      if (resp?.error) {
        toast.error('Email or password is incorrect.')
      }
    },
    [router]
  )

  return (
    <form className={tw`space-y-4`} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register('email')}
      />

      <PasswordInput label="Password" {...register('password')} />

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Sign In
      </Button>

      <p className={tw`text-sm font-light text-gray-500`}>
        <span>Don’t have an account yet? </span>

        <Link href="/sign-up">
          <a className={tw`font-medium text-violet-600 hover:underline`}>
            Sign Up
          </a>
        </Link>
      </p>
    </form>
  )
}
