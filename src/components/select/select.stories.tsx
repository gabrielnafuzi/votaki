import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select, SelectItem } from './select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    onValueChange: { action: 'onValueChange' },
  },
} as ComponentMeta<typeof Select>

const fruits = [
  { label: 'Pear', value: 'pear' },
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
]

export const Default: ComponentStory<typeof Select> = (args) => (
  <div className="w-36">
    <Select {...args}>
      {fruits.map((fruit) => (
        <SelectItem key={fruit.value} value={fruit.value}>
          {fruit.label}
        </SelectItem>
      ))}
    </Select>
  </div>
)

Default.args = {
  defaultValue: fruits[0]?.value,
  label: 'Select a fruit',
  name: 'select-storybook-fruit',
}

const categories = [
  { label: 'Movies', value: 'movies' },
  { label: 'TV Shows', value: 'tv-shows' },
  { label: 'Books', value: 'books' },
]

export const withError: ComponentStory<typeof Select> = (args) => (
  <div className="w-44">
    <Select {...args}>
      <SelectItem value="category-default-value" disabled>
        Eg. Movies
      </SelectItem>

      {categories.map((category) => (
        <SelectItem key={category.value} value={category.value}>
          {category.label}
        </SelectItem>
      ))}
    </Select>
  </div>
)

withError.args = {
  defaultValue: 'category-default-value',
  label: 'Category',
  name: 'select-storybook-fruit',
  errorMessage: 'Please select a category',
  isInvalid: true,
}
