import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './input'

export default {
  title: 'Input',
  component: Input,
  args: {
    label: 'E-mail',
    name: 'email',
    placeholder: 'johndoe@mail.com',
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: false },
    rightElement: { control: false },
    errorMessage: { control: false },
    isInvalid: { control: false },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (args) => (
  <div className="max-w-md">
    <Input {...args} />
  </div>
)

export const withError = Default.bind({})

withError.args = {
  errorMessage: 'This field is required',
  isInvalid: true,
}

export const withRightElement: ComponentStory<typeof Input> = (args) => (
  <div className="max-w-md">
    <Input
      {...args}
      rightElement={
        <div className="bg-red-200 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer">
          <div className="bg-red-500 w-3 h-3 rounded-full" />
        </div>
      }
    />
  </div>
)
