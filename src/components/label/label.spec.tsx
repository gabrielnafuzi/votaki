import { expect, it, describe } from 'vitest'

import { render, screen } from '@/utils/test-utils'

import { Label } from './label'

describe('<Label />', () => {
  it('renders correctly', () => {
    render(<Label>test label</Label>)

    expect(
      screen.getByRole('label', { name: /test label/i })
    ).toBeInTheDocument()
  })
})
