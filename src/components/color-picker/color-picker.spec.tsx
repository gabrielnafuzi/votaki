import { expect, it, describe, vi } from 'vitest'

import {
  mockComponentWithChildren,
  render,
  screen,
  userEvent,
} from '@/utils/test-utils'

import { colorsToSelect } from '../common'
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

    const colorButton = getColorOptionElement(colorsToSelect[2])

    await userEvent.click(colorButton)

    expect(onChange).toHaveBeenCalledWith(colorsToSelect[2])
  })

  it('be accessible with tab', async () => {
    const onChange = vi.fn()

    render(<ColorPicker onChange={onChange} />)

    expect(document.body).toHaveFocus()

    await userEvent.tab() // selects the trigger button
    await userEvent.tab() // selects the first color option

    expect(getColorOptionElement(colorsToSelect[0])).toHaveFocus()

    await userEvent.tab() // selects the second color option
    await userEvent.keyboard('{enter}')

    expect(onChange).toHaveBeenCalledWith(colorsToSelect[1])
  })

  it('renders all colorsToSelect correctly', async () => {
    render(<ColorPicker onChange={vi.fn} />)

    const selectableButtons = screen.getAllByRole('button', {
      name: /Select/i,
    })

    selectableButtons.forEach((button, idx) => {
      expect(button.title).toBe(colorsToSelect[idx])
    })

    expect(selectableButtons).toHaveLength(colorsToSelect.length)
  })
})
