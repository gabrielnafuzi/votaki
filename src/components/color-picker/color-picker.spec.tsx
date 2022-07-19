import { expect, it, describe, vi } from 'vitest'

import {
  mockComponentWithChildren,
  render,
  screen,
  userEvent,
} from '@/utils/test-utils'

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

    await userEvent.click(colorButton)

    expect(onChange).toHaveBeenCalledWith(pollColors[2])
  })

  it('be accessible with tab', async () => {
    const onChange = vi.fn()

    render(<ColorPicker onChange={onChange} />)

    expect(document.body).toHaveFocus()

    await userEvent.tab() // selects the trigger button
    await userEvent.tab() // selects the first color option

    expect(getColorOptionElement(pollColors[0])).toHaveFocus()

    await userEvent.tab() // selects the second color option
    await userEvent.keyboard('{enter}')

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
