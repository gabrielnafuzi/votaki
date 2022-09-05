import * as LabelPrimitive from '@radix-ui/react-label'
import { apply, tw } from 'twind'

export type LabelProps = {
  isInvalid?: boolean
} & LabelPrimitive.LabelProps

export const Label = ({
  isInvalid = false,
  children,
  ...props
}: LabelProps) => {
  return (
    <LabelPrimitive.Root
      className={tw(
        apply`block mb-1 text-sm font-medium text-gray-700 cursor-default max-w-max
        ${isInvalid && 'text-error'}`
      )}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  )
}
