import React from 'react'

import { expect, it, describe, vi } from 'vitest'

import { render, screen, waitFor } from '@/test/test-utils'

import { Avatar } from './avatar'

vi.mock('@radix-ui/react-avatar', async () => {
  const { Avatar, AvatarFallback } = await vi.importActual<
    Record<string, unknown>
  >('@radix-ui/react-avatar')

  return {
    Avatar,
    AvatarFallback,
    AvatarImage: ({ alt, src }: { alt: string; src: string }) => (
      <img src={src} alt={alt} />
    ),
  }
})

describe('<Avatar />', () => {
  it('renders image if src is provided', () => {
    render(<Avatar src="https://via.placeholder.com/150" name="John Doe" />)

    expect(screen.getByRole('img', { name: /John Doe/i })).toBeInTheDocument()
  })

  it('renders fallback if src is not provided', async () => {
    render(<Avatar name="John Doe" />)

    await waitFor(() => screen.getByText(/JD/i))

    expect(screen.getByText(/JD/i)).toBeInTheDocument()
  })

  it("renders with small size if size is 'small'", async () => {
    const { container } = render(<Avatar size="small" name="John Doe" />)

    await waitFor(() => screen.getByText(/JD/i))

    expect(container.firstChild).toHaveStyle({
      width: '2.5rem',
      height: '2.5rem',
    })

    expect(screen.getByText(/JD/i)).toHaveStyle({
      fontSize: '0.875rem',
    })
  })

  it("renders with medium size if size is 'medium'", async () => {
    const { container } = render(<Avatar size="medium" name="John Doe" />)

    await waitFor(() => screen.getByText(/JD/i))

    expect(container.firstChild).toHaveStyle({
      width: '4rem',
      height: '4rem',
    })

    expect(screen.getByText(/JD/i)).toHaveStyle({
      fontSize: '1.25rem',
    })
  })

  it("renders with large size if size is 'large'", async () => {
    const { container } = render(<Avatar size="large" name="John Doe" />)

    await waitFor(() => screen.getByText(/JD/i))

    expect(container.firstChild).toHaveStyle({
      width: '6rem',
      height: '6rem',
    })

    expect(screen.getByText(/JD/i)).toHaveStyle({
      fontSize: '1.875rem',
    })
  })

  it('renders with full rounded if isFullRounded is true', async () => {
    const { container } = render(<Avatar isFullRounded name="John Doe" />)

    expect(container.firstChild).toHaveStyle({
      borderRadius: '9999px',
    })
  })

  it('renders without full rounded if isFullRounded is false', async () => {
    const { container } = render(
      <Avatar isFullRounded={false} name="John Doe" />
    )

    expect(container.firstChild).toHaveStyle({
      borderRadius: '0.375rem',
    })
  })
})
