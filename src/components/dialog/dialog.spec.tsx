import React from 'react'

import { expect, it, describe, vi } from 'vitest'

import { mockComponentWithChildren, render, screen } from '@/utils/test-utils'

import { DialogContent } from './dialog'

vi.mock('@radix-ui/react-dialog', () => {
  return {
    Trigger: mockComponentWithChildren,
    Root: mockComponentWithChildren,
    Portal: mockComponentWithChildren,
    Overlay: mockComponentWithChildren,
    Content: mockComponentWithChildren,
    Title: mockComponentWithChildren,
    Description: mockComponentWithChildren,
    Close: mockComponentWithChildren,
  }
})

describe('<Dialog />', () => {
  it('renders the children correctly if passed', () => {
    render(
      <DialogContent>
        <p>Hello from dialog</p>
      </DialogContent>
    )

    expect(screen.getByText(/hello from dialog/i)).toBeInTheDocument()
  })

  it('renders the title correctly if passed', () => {
    render(<DialogContent title="Dialog title" />)

    expect(screen.getByText(/dialog title/i)).toBeInTheDocument()
  })

  it('renders the description correctly if passed', () => {
    render(<DialogContent description="Dialog description" />)

    expect(screen.getByText(/dialog description/i)).toBeInTheDocument()
  })
})
