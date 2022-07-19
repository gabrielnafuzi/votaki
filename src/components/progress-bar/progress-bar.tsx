import * as ProgressPrimitive from '@radix-ui/react-progress'
import { tw } from 'twind'

import { pollColors, ColorToSelect } from '../common'

type ProgressBarProps = {
  value?: number
  color?: ColorToSelect
} & Omit<
  ProgressPrimitive.ProgressProps,
  'asChild' | 'value' | 'max' | 'className'
>

export const ProgressBar = ({
  value = 0,
  color = pollColors[0],
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
        className={tw`w-[${value}%] h-full transition-all duration-200 bg-[${color}]`}
      />
    </ProgressPrimitive.Root>
  )
}
