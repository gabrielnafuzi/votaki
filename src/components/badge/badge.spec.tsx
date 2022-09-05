import { expect, it, describe } from 'vitest'

import { render, screen } from '@/test/test-utils'

import { pollColors } from '../common'
import { Badge } from './badge'

describe('<Badge />', () => {
  it('renders the children correctly', () => {
    render(<Badge color={pollColors[1]}>Science</Badge>)

    expect(screen.getByText(/science/i)).toBeInTheDocument()
  })

  it('renders the color correctly', () => {
    render(<Badge color={pollColors[1]}>Science</Badge>)

    expect(screen.getByText(/science/i)).toHaveClass(`bg-[${pollColors[1]}]`)
  })
})
