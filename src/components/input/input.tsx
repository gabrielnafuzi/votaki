import {
  ReactNode,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { tw } from 'twind'

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
  const inputClasses = tw(
    classes.inputWrapper,
    isInvalid && classes.inputError,
    disabled && classes.inputDisabled
  )

  const showErrorMessage = isInvalid && !!errorMessage

  return (
    <div>
      {!!label && (
        <Label isInvalid={isInvalid} htmlFor={name}>
          {label}
        </Label>
      )}

      <div className={inputClasses}>
        <input
          ref={ref}
          className={classes.input}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />

        {!!rightElement && (
          <div className={classes.rightElementWrapper}>{rightElement}</div>
        )}
      </div>

      {showErrorMessage && (
        <p className={classes.errorMessage}>{errorMessage}</p>
      )}
    </div>
  )
}

export const Input = forwardRef(BaseInput)
