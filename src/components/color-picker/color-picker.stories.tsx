import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ColorPicker } from './color-picker'

export default {
  title: 'ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ColorPicker>

export const Default: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
)
