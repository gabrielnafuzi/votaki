import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { pollColors } from '../common'
import { Badge } from './badge'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Badge>

export const Default: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
)

Default.args = {
  color: pollColors[1],
  children: 'Science',
}
