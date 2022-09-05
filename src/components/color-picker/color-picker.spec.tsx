import { expect, it, describe, vi } from 'vitest'

import {
  click,
  mockComponentWithChildren,
  press,
  render,
  screen,
} from '@/test/test-utils'

import { pollColors } from '../common'
import { ColorPicker } from './color-picker'

vi.mock('@radix-ui/react-popover', async () => {
  const radixPopover = await vi.importActual<Record<string, unknown>>(
    '@radix-ui/react-popover'
  )

  return {
    ...radixPopover,
    Root: mockComponentWithChildren,
    Trigger: mockComponentWithChildren,
    Content: mockComponentWithChildren,
    Arrow: () => <div />,
    Close: () => <div />,
  }
})

const getColorOptionElement = (color: string) =>
  screen.getByRole('button', {
    name: `Select ${color}`,
  })

describe('<ColorPicker />', () => {
  it('call onChange when a color is selected', async () => {
    const onChange = vi.fn()

    render(<ColorPicker onChange={onChange} />)

    const colorButton = getColorOptionElement(pollColors[2])

    await click(colorButton)

    expect(onChange).toHaveBeenCalledWith(pollColors[2])
  })

  it('be accessible with tab', async () => {
    const onChange = vi.fn()

    render(<ColorPicker onChange={onChange} />)

    expect(document.body).toHaveFocus()

    await press.Tab() // selects the trigger button
    await press.Tab() // selects the first color option

    expect(getColorOptionElement(pollColors[0])).toHaveFocus()

    await press.Tab() // selects the second color option
    await press.Enter()

    expect(onChange).toHaveBeenCalledWith(pollColors[1])
  })

  it('renders all pollColors correctly', async () => {
    render(<ColorPicker onChange={vi.fn} />)

    const selectableButtons = screen.getAllByRole('button', {
      name: /Select/i,
    })

    selectableButtons.forEach((button, idx) => {
      expect(button.title).toBe(pollColors[idx])
    })

    expect(selectableButtons).toHaveLength(pollColors.length)
  })
})
