import { expect, it, describe, vi } from 'vitest'

import { render, screen, userEvent, waitFor } from '@/utils/test-utils'

import { Input } from './input'

describe('<Input />', () => {
  it('renders with label', () => {
    render(<Input label="Email" name="email" />)

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders without the label', () => {
    render(<Input name="email" />)

    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
  })

  it("renders the rightElement when it's passed", () => {
    const rightElement = <div>Right Element</div>

    render(<Input name="with-right-element" rightElement={rightElement} />)

    expect(screen.getByText('Right Element')).toBeInTheDocument()
  })

  it("renders the error message when it's passed and isInvalid is true", () => {
    render(
      <Input name="with-error-message" errorMessage="Error Message" isInvalid />
    )

    expect(screen.getByText('Error Message')).toBeInTheDocument()
  })

  it("changes the input's value when typing", async () => {
    const onChange = vi.fn()

    render(<Input name="email" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    const text = 'doe@mail.com'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes(text.length)
    })
  })

  it("doesn't change the input's value when is disabled", async () => {
    const onChange = vi.fn()

    render(<Input name="email" onChange={onChange} disabled />)

    const input = screen.getByRole('textbox')
    const text = 'doe@mail.com'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue('')
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  it('be accessible with tab', () => {
    render(<Input name="email" />)

    const input = screen.getByRole('textbox')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).toHaveFocus()
  })
})
