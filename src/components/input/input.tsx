import {
  ReactNode,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { tw } from 'twind'

import { FormErrorMessage } from '../form-error-message'
import { Label } from '../label'
import * as classes from './input.styles'

type InputProps = {
  errorMessage?: string
  isInvalid?: boolean
  label?: string
  name: string
  rightElement?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, disabled, isInvalid, errorMessage, rightElement, ...props },
  ref
) => {
  const disabledStyles = disabled && classes.disabled

  const inputWrapperClasses = tw(
    classes.inputWrapper,
    isInvalid && classes.inputError,
    disabledStyles
  )

  const showErrorMessage = isInvalid && !!errorMessage

  return (
    <div>
      {!!label && (
        <Label isInvalid={isInvalid} htmlFor={name}>
          {label}
        </Label>
      )}

      <div className={inputWrapperClasses}>
        <input
          ref={ref}
          className={tw(classes.input, disabledStyles)}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />

        {!!rightElement && (
          <div className={tw(classes.rightElementWrapper, disabledStyles)}>
            {rightElement}
          </div>
        )}
      </div>

      {showErrorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </div>
  )
}

export const Input = forwardRef(BaseInput)
