import { useToggle } from '@/hooks/use-toggle'

import { Input, InputProps } from '../input'
import { ToggleShowPasswordButton } from './partials/toggle-password-button'

type PasswordInputProps = Omit<InputProps, 'type' | 'rightElement'>

export const PasswordInput = ({ name, ...props }: PasswordInputProps) => {
  const [showPassword, toggleShowPassword] = useToggle(false)

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      name={name}
      rightElement={
        <ToggleShowPasswordButton
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          inputName={name}
        />
      }
      {...props}
    />
  )
}
