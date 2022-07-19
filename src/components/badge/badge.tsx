import { darken, lighten, readableColor } from 'polished'
import { tw } from 'twind'

import type { PollColors } from '../common'

type BadgeProps = {
  children: React.ReactNode
  color: PollColors
}

export const Badge = ({ children, color }: BadgeProps) => {
  const textColor = readableColor(
    color,
    darken(0.4, color),
    lighten(0.4, color),
    false
  )

  return (
    <span
      className={tw`text-[${textColor}] bg-[${color}] rounded-md px-2.5 py-2 font-bold uppercase text-xs shadow-sm`}
    >
      {children}
    </span>
  )
}
