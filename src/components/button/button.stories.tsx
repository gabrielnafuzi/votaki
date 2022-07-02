import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Default.args = {
  children: 'Hello Button',
}
