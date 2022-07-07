import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    name: { control: false },
    asChild: { control: false },
    onCheckedChange: { action: 'onCheckedChange' },
  },
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

Default.args = {
  label: 'Allow multiple votes',
  name: 'allow-multiple-votes',
}
