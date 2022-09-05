import { describe, expect, it } from 'vitest'

import { render, screen } from '@/test/test-utils'

import { Select, SelectItem } from './select'

const items = [
  { label: 'Pear', value: 'pear' },
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
]

const List = () => (
  <>
    {items.map((item) => (
      <SelectItem key={item.value} value={item.value}>
        {item.label}
      </SelectItem>
    ))}
  </>
)

describe('<Select />', () => {
  it('renders correctly', () => {
    render(
      <Select open>
        <List />
      </Select>
    )

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('renders correctly with a label', () => {
    render(
      <Select label="Select a fruit">
        <List />
      </Select>
    )

    expect(
      screen.getByRole('label', {
        name: /Select a fruit/i,
      })
    ).toBeInTheDocument()
  })

  it("renders the error message when it's passed and isInvalid is true", () => {
    render(
      <Select
        label="Select a fruit"
        isInvalid
        errorMessage="Please select a fruit"
      >
        <List />
      </Select>
    )

    expect(screen.getByText(/please select a fruit/i)).toBeInTheDocument()
  })
})
