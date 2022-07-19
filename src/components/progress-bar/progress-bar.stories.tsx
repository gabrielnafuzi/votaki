import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { colorsToSelect } from '../color-picker/colors-to-select'
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

export const withOtherColors: ComponentStory<typeof ProgressBar> = () => (
  <div className="flex flex-col gap-6">
    {colorsToSelect.slice(0, 10).map((color) => (
      <ProgressBar
        key={color}
        className={`bg-[${color}]`}
        value={Math.floor(Math.random() * 100)}
      />
    ))}
  </div>
)

withOtherColors.argTypes = {
  value: { control: false },
}
