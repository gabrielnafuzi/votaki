import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tw } from 'twind'

import { ANIMATIONS } from '@/styles/animations-enum'

type TooltipProps = {
  content: React.ReactNode
} & TooltipPrimitive.TooltipProps &
  TooltipPrimitive.TooltipContentProps &
  TooltipPrimitive.TooltipProviderProps

const animations: Record<Exclude<TooltipProps['side'], undefined>, string> = {
  top: ANIMATIONS.SLIDE_DOWN_AND_FADE,
  bottom: ANIMATIONS.SLIDE_UP_AND_FADE,
  left: ANIMATIONS.SLIDE_RIGHT_AND_FADE,
  right: ANIMATIONS.SLIDE_LEFT_AND_FADE,
}

export const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  side = 'top',
  className,
  delayDuration,
  disableHoverableContent,
  skipDelayDuration,
  ...props
}: TooltipProps) => {
  const contentClasses = tw`
    rounded-md py-2.5 px-3.5 text-sm leading-none text-white bg-gray-700 shadow-lg
    animate-${animations[side]} ${className}
  `

  return (
    <TooltipPrimitive.TooltipProvider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content
          side={side}
          align="center"
          className={contentClasses}
          sideOffset={5}
          {...props}
        >
          {content}

          <TooltipPrimitive.Arrow className={tw`text-gray-700 fill-current`} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  )
}
