import { ForwardRefRenderFunction, forwardRef } from 'react'

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { tw } from 'twind'

import { FormErrorMessage } from '../form-error-message'
import { Label } from '../label'
import * as classes from './select.styles'

type SelectProps = {
  label?: string
  isInvalid?: boolean
  errorMessage?: string
  disabled?: boolean
} & SelectPrimitive.SelectProps

const BaseSelect: ForwardRefRenderFunction<HTMLButtonElement, SelectProps> = (
  {
    children,
    label,
    isInvalid = false,
    errorMessage,
    name,
    disabled = false,
    ...props
  },
  forwardedRef
) => {
  const showErrorMessage = isInvalid && !!errorMessage

  const triggerClasses = tw(classes.trigger, isInvalid && classes.triggerError)

  return (
    <div>
      {!!label && (
        <Label isInvalid={isInvalid} htmlFor={name}>
          {label}
        </Label>
      )}

      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          id={name}
          className={triggerClasses}
          ref={forwardedRef}
          disabled={disabled}
        >
          <SelectPrimitive.Value />

          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Content className={classes.content}>
          <SelectPrimitive.ScrollUpButton className={classes.scrollButton}>
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className={classes.viewport}>
            {children}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className={classes.scrollButton}>
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>

      {showErrorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </div>
  )
}

const BaseSelectItem: ForwardRefRenderFunction<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
> = ({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      className={classes.item}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator className={classes.itemIndicator}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export const Select = forwardRef(BaseSelect)
export const SelectItem = forwardRef(BaseSelectItem)
