import { expect, it, describe } from 'vitest'

import { render, screen } from '@/test/test-utils'

import { CloseButton } from './close-button'

describe('<CloseButton />', () => {
  it('renders correctly', () => {
    render(<CloseButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
