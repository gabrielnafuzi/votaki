import { expect, it, describe, vi } from 'vitest'

import { click, render, screen } from '@/test/test-utils'

import { Checkbox } from './checkbox'

describe('<Checkbox />', () => {
  it('renders the label correctly', () => {
    render(<Checkbox name="test-checkbox" label="Test checkbox" />)

    expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument()
  })

  it("toggle the checkbox's state when click on label", async () => {
    const onCheckedChange = vi.fn()

    render(
      <Checkbox
        name="test-checkbox"
        label="Test checkbox"
        onCheckedChange={onCheckedChange}
        defaultChecked={false}
      />
    )

    const label = screen.getByLabelText('Test checkbox')

    await click(label)
    expect(onCheckedChange).toHaveBeenCalledWith(true)

    await click(label)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })
})
