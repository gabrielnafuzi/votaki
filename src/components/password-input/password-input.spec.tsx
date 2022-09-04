import { describe, expect, it } from 'vitest'

import { click, press, render, screen } from '@/utils/test-utils'

import { PasswordInput } from './password-input'

describe('<PasswordInput />', () => {
  it('inits with password type', () => {
    render(<PasswordInput name="password" label="Password" />)

    expect(screen.getByLabelText(/password/i)).toHaveAttribute(
      'type',
      'password'
    )
  })

  it('toggles password type when clicking on the button', async () => {
    render(<PasswordInput name="password" label="Password" />)

    const passwordField = screen.getByLabelText(/password/i)
    const toggleButton = screen.getByRole('button')

    await click(toggleButton)
    expect(passwordField).toHaveAttribute('type', 'text')

    await click(toggleButton)
    expect(passwordField).toHaveAttribute('type', 'password')
  })

  it('be accessible with keyboard', async () => {
    render(<PasswordInput name="password" label="Password" />)

    const passwordField = screen.getByLabelText(/password/i)
    const toggleButton = screen.getByRole('button')

    expect(document.body).toHaveFocus()

    await press.Tab()
    expect(passwordField).toHaveFocus()

    await press.Tab()
    expect(toggleButton).toHaveFocus()

    await press.Space()
    expect(passwordField).toHaveAttribute('type', 'text')

    await press.Enter()
    expect(passwordField).toHaveAttribute('type', 'password')
  })
})
