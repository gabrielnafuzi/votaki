import { signIn } from 'next-auth/react'

import { describe, it, expect, vi } from 'vitest'

import { userGenerator } from '@/test/data-generators'
import {
  click,
  render,
  screen,
  typeOnElement,
  mockNextUseRouter,
} from '@/test/test-utils'

import { SignInForm } from './sign-in-form'

vi.mock('next-auth/react', () => ({
  signIn: vi.fn().mockResolvedValue({ status: 200 }),
}))

const push = vi.fn()
const error = console.error

console.error = (...msg) => {
  if (!msg[0]?.includes('Warning: React has detected')) {
    error(...msg)
  }
}

describe('<SignInForm />', () => {
  it('renders the form correctly', () => {
    render(<SignInForm />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders text to sign up if doesn’t have an account', () => {
    render(<SignInForm />)

    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/don’t have an account yet\?/i)).toBeInTheDocument()
  })

  it('calls signIn and redirects the user to /me/dashboard if success', async () => {
    mockNextUseRouter({ push })
    const newUser = userGenerator()

    render(<SignInForm />)

    await typeOnElement(screen.getByLabelText(/email/i), newUser.email)
    await typeOnElement(screen.getByLabelText(/password/i), newUser.password)

    await click(screen.getByRole('button', { name: /sign in/i }))

    expect(signIn).toHaveBeenCalledWith('credentials', {
      email: newUser.email,
      password: newUser.password,
      redirect: false,
    })

    expect(push).toHaveBeenCalledWith('/me/dashboard')
  })
})
