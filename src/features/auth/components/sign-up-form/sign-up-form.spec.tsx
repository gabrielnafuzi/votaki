import { signIn } from 'next-auth/react'

import { describe, it, expect, vi } from 'vitest'

import { userGenerator } from '@/test/data-generators'
import {
  click,
  render,
  screen,
  typeOnElement,
  mockComponentWithChildren,
  waitFor,
} from '@/test/test-utils'
import { trpc } from '@/utils/trpc'

import { SignUpForm } from './sign-up-form'

vi.mock('next-auth/react', () => ({
  signIn: vi.fn().mockResolvedValue({ status: 200 }),
}))

vi.mock('@/components/tooltip', () => ({
  Tooltip: mockComponentWithChildren,
}))

describe('<SignUpForm />', () => {
  it('renders the form correctly', () => {
    vi.spyOn(trpc, 'useMutation').mockImplementationOnce(() => ({} as any))

    render(<SignUpForm />)

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /create an account/i })
    ).toBeInTheDocument()
  })

  it('renders text and link to sign in', () => {
    vi.spyOn(trpc, 'useMutation').mockImplementationOnce(() => ({} as any))

    render(<SignUpForm />)

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })

  it("register new user and redirects to '/me/dashboard'", async () => {
    const newUser = userGenerator()

    const mutateAsyncMock = vi.fn().mockResolvedValue({
      status: 201,
    })

    vi.spyOn(trpc, 'useMutation').mockImplementation(
      () => ({ mutateAsync: mutateAsyncMock } as any)
    )

    render(<SignUpForm />)

    await typeOnElement(screen.getByLabelText(/first name/i), newUser.firstName)
    await typeOnElement(screen.getByLabelText(/last name/i), newUser.lastName)
    await typeOnElement(screen.getByLabelText(/username/i), newUser.username)
    await typeOnElement(screen.getByLabelText(/email/i), newUser.email)
    await typeOnElement(screen.getByLabelText(/^password$/i), newUser.password)

    await typeOnElement(
      screen.getByLabelText(/confirm password/i),
      newUser.password
    )

    await click(screen.getByRole('button', { name: /create an account/i }))

    expect(mutateAsyncMock).toHaveBeenCalledWith({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      passwordConfirmation: newUser.password,
      username: newUser.username.toLowerCase(),
    })

    await waitFor(() =>
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: newUser.email,
        password: newUser.password,
        callbackUrl: '/me/dashboard',
      })
    )
  })
})
