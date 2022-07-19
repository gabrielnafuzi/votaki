import { expect, it, describe } from 'vitest'

import { render, screen } from '@/utils/test-utils'

import { colorsToSelect } from '../common'
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

  it('renders with first color of colorsToSelect by default', () => {
    render(<ProgressBar value={40} />)

    expect(
      screen.getByRole('progressbar', { name: /40%/i }).firstChild
    ).toHaveClass(`bg-[${colorsToSelect[0]}]`)
  })

  it('renders with the other color', () => {
    render(<ProgressBar value={40} color={colorsToSelect[2]} />)

    expect(
      screen.getByRole('progressbar', { name: /40%/i }).firstChild
    ).toHaveClass(`bg-[${colorsToSelect[2]}]`)
  })
})
