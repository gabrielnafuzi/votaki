import { expect, it, describe } from 'vitest'

import { render, screen } from '@/test/test-utils'

import { FormErrorMessage } from './form-error-message'

describe('<FormErrorMessage />', () => {
  it('renders children correctly', () => {
    render(<FormErrorMessage>Some error message</FormErrorMessage>)

    expect(screen.getByText(/some error message/i)).toBeInTheDocument()
  })
})
