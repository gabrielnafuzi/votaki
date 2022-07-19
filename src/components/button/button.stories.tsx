import { PlusIcon } from '@radix-ui/react-icons'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'solid',
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: false },
    icon: { control: false },
    disabled: { control: 'boolean' },
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const withIcon = Default.bind({})

withIcon.args = {
  children: 'Add another option',
  icon: <PlusIcon width={19} height={19} />,
}
