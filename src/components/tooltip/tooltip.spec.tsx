import { expect, it, describe, vi } from 'vitest'

import { mockComponentWithChildren, render, screen } from '@/test/test-utils'

import { Tooltip } from './tooltip'

vi.mock('@radix-ui/react-tooltip', async () => {
  return {
    TooltipProvider: mockComponentWithChildren,
    Root: mockComponentWithChildren,
    Trigger: mockComponentWithChildren,
    Content: mockComponentWithChildren,
    Arrow: () => <div />,
  }
})

describe('<Tooltip />', () => {
  it('renders the content correctly', () => {
    render(<Tooltip content="This is a tooltip">Hello</Tooltip>)

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
    expect(screen.getByText(/this is a tooltip/i)).toBeInTheDocument()
  })
})
