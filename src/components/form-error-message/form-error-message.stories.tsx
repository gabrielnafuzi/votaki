import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { FormErrorMessage } from './form-error-message'

export default {
  title: 'FormErrorMessage',
  component: FormErrorMessage,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof FormErrorMessage>

export const Default: ComponentStory<typeof FormErrorMessage> = (args) => (
  <div>
    <input
      type="email"
      value="invalid email"
      className="rounded border border-gray-400"
    />

    <FormErrorMessage {...args} />
  </div>
)

Default.args = {
  children: 'E-mail invalid',
}
