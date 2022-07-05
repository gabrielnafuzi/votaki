import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from './avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    size: 'small',
  },
} as ComponentMeta<typeof Avatar>

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
)

export const withFallback = Default.bind({})

withFallback.args = {
  name: 'John Doe',
  src: '',
}

withFallback.argTypes = {
  src: { control: false },
}
