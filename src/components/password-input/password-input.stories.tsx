import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { PasswordInput } from './password-input'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  args: {
    label: 'Password',
    name: 'password',
    placeholder: '**********',
  },
} as ComponentMeta<typeof PasswordInput>

export const Default: ComponentStory<typeof PasswordInput> = (args) => (
  <div className="max-w-md">
    <PasswordInput {...args} />
  </div>
)
