import { expect, it, describe } from 'vitest'

import { render, screen } from '@/utils/test-utils'

import { CloseButton } from './close-button'

describe('<CloseButton />', () => {
  it('renders correctly', () => {
    const { container } = render(<CloseButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
