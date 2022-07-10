import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Label } from './label'

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Label>

export const Default: ComponentStory<typeof Label> = (args) => (
  <div className="flex items-center gap-2">
    <Label htmlFor="label-storybook" {...args} />

    <input
      type="text"
      id="label-storybook"
      className="border border-gray-500 rounded px-2"
    />
  </div>
)

Default.args = {
  children: 'Name',
}
