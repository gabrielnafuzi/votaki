import { forwardRef, ForwardRefRenderFunction } from 'react'

import { useToggle } from '@/hooks/use-toggle'

import { Input, InputProps } from '../input'
import { ToggleShowPasswordButton } from './partials/toggle-password-button'

type PasswordInputProps = Omit<InputProps, 'type' | 'rightElement'>

const BasePasswordInput: ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordInputProps
> = ({ name, ...props }, forwardedRef) => {
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
      ref={forwardedRef}
      {...props}
    />
  )
}

export const PasswordInput = forwardRef(BasePasswordInput)
