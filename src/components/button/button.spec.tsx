import { PlusIcon } from '@radix-ui/react-icons'
import { expect, it, describe } from 'vitest'

import { render, screen } from '@/test/test-utils'

import { Button } from './button'

describe('<Button />', () => {
  it('render the small size by default', () => {
    render(<Button>Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '2.5rem',
      'font-size': '0.875rem',
    })
  })

  it('render the medium size', () => {
    render(<Button size="medium">Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1rem',
    })
  })

  it('render the large size', () => {
    render(<Button size="large">Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '3.5rem',
      'font-size': '1.25rem',
    })
  })

  it('render a fullWidth version', () => {
    render(<Button fullWidth>Click here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveStyle({
      width: '100%',
    })
  })

  it('render an icon version', () => {
    render(<Button icon={<PlusIcon data-testid="icon" />}>Add</Button>)

    expect(screen.getByText(/add/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('render solid variant by default', () => {
    render(<Button>Click here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveClass(
      'bg-primary border-2 border-primary text-white shadow-sm'
    )
  })

  it('render text variant', () => {
    render(<Button variant="text">Click here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveClass(
      'text-gray-700 p-0'
    )
  })

  it('render outline variant', () => {
    render(<Button variant="outline">Click here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveClass(
      'text-gray-700 border-2 border-gray-700'
    )
  })

  it('render a disabled Button', () => {
    render(<Button disabled>Click here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveStyle(
      'cursor: not-allowed'
    )
  })

  it('render a with spinner if isLoading is true', () => {
    render(<Button isLoading>Click here</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
