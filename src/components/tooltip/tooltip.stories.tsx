import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../button'
import { Tooltip } from './tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    side: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
    content: { control: { type: 'text' } },
    children: { control: false },
    delayDuration: { control: { type: 'number' } },
    disableHoverableContent: { control: { type: 'boolean' } },
    skipDelayDuration: { control: { type: 'number' } },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>

export const Default: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
)

Default.args = {
  side: 'top',
  content: 'This is a tooltip',
  children: <Button>Hover me to see a tooltip</Button>,
  delayDuration: 700,
  disableHoverableContent: false,
  skipDelayDuration: 300,
}
