import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProgressBar } from './progress-bar'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
} as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
)

Default.args = {
  value: 30,
}
