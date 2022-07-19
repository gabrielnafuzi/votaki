import * as ProgressPrimitive from '@radix-ui/react-progress'
import { tw } from 'twind'

type ProgressBarProps = {
  value?: number
} & Omit<ProgressPrimitive.ProgressProps, 'asChild' | 'value' | 'max'>

export const ProgressBar = ({
  value = 0,
  className,
  ...props
}: ProgressBarProps) => {
  return (
    <ProgressPrimitive.Root
      value={value}
      className={tw`relative overflow-hidden bg-gray-200 rounded-[50px] w-full h-2.5`}
      title={`${value}%`}
      {...props}
    >
      <ProgressPrimitive.ProgressIndicator
        className={tw`w-[${value}%] h-full transition-all duration-200 bg-primary ${className}`}
      />
    </ProgressPrimitive.Root>
  )
}
