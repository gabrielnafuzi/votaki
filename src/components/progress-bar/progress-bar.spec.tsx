import { expect, it, describe } from 'vitest'

import { render, screen } from '@/utils/test-utils'

import { ProgressBar } from './progress-bar'

describe('<ProgressBar />', () => {
  it('renders with the correct value', () => {
    render(<ProgressBar value={40} />)

    const progressBar = screen.getByRole('progressbar', { name: /40%/i })

    expect(progressBar).toBeInTheDocument()
    expect(progressBar.firstChild).toHaveClass('w-[40%]')

    expect(
      screen.getByRole('progressbar', { name: /40%/i })
    ).toBeInTheDocument()
  })

  it('renders with primary background by default', () => {
    render(<ProgressBar value={40} />)

    expect(
      screen.getByRole('progressbar', { name: /40%/i }).firstChild
    ).toHaveClass('bg-primary')
  })

  it('renders with the correct background color', () => {
    render(<ProgressBar value={40} className="bg-red-500" />)

    expect(
      screen.getByRole('progressbar', { name: /40%/i }).firstChild
    ).toHaveClass('bg-red-500')
  })
})
