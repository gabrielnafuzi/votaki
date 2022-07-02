import { expect, it, describe } from 'vitest'

import { render, screen } from '@/utils/test-utils'

import { Button } from './button'

describe('<Button />', () => {
  it('renders correctly', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
