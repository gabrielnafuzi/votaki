import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { tw } from 'twind'

import {
  signUpSchemaWithConfirmPassword,
  type SignUpSchemaWithConfirmPassword,
} from '@/common/validation/auth'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { PasswordInput } from '@/components/password-input'
import { Tooltip } from '@/components/tooltip'
import { trpc } from '@/utils/trpc'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaWithConfirmPassword>({
    resolver: zodResolver(signUpSchemaWithConfirmPassword),
  })

  const { mutateAsync } = trpc.useMutation(['auth.sign-up'])

  const onSubmit: SubmitHandler<SignUpSchemaWithConfirmPassword> = useCallback(
    async (data) => {
      const result = await mutateAsync({
        ...data,
        username: data.username.toLowerCase(),
      })

      if (result.status === 201) {
        await signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: '/me/dashboard',
        })
      }
    },
    [mutateAsync]
  )

  return (
    <form
      className={tw`space-y-2 md:space-y-4`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={tw`grid md:grid-cols-2 gap-2 md:gap-4`}>
        <Input
          label="First name"
          errorMessage={errors.firstName?.message}
          isInvalid={!!errors.firstName}
          {...register('firstName')}
        />

        <Input
          label="Last name"
          errorMessage={errors.lastName?.message}
          isInvalid={!!errors.lastName}
          {...register('lastName')}
        />
      </div>

      <Input
        label="Email"
        type="email"
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        autoComplete="username"
        {...register('email')}
      />

      <Tooltip
        side="top"
        content="Use letters, numbers, underscore, and dashes only. This is for your profile url eg. https://votaki.nafuzi.dev/profiles/your-username"
        className="max-w-xs text-center leading-4"
        sideOffset={30}
      >
        <Input
          label="Username"
          errorMessage={errors.username?.message}
          isInvalid={!!errors.username}
          {...register('username')}
        />
      </Tooltip>

      <PasswordInput
        label="Password"
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        {...register('password')}
      />

      <PasswordInput
        label="Confirm Password"
        errorMessage={errors.passwordConfirmation?.message}
        isInvalid={!!errors.passwordConfirmation}
        {...register('passwordConfirmation')}
      />

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Create an account
      </Button>

      <p className={tw`text-sm font-light text-gray-500`}>
        <span>Already have an account? </span>

        <Link href="/sign-in">
          <a className={tw`font-medium text-violet-600 hover:underline`}>
            Sign in
          </a>
        </Link>
      </p>
    </form>
  )
}
