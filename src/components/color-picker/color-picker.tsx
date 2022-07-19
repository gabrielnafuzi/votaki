import { useCallback, useState } from 'react'

import * as Popover from '@radix-ui/react-popover'
import { tw } from 'twind'

import { getRandomItem } from '@/utils/get-random-item'

import { CloseButton } from '../close-button'
import { pollColors, type PollColors } from '../common'
import { SelectableColor } from './partials'

type ColorPickerProps = {
  initialColor?: PollColors
  onChange: (color: PollColors) => void
}

const randomColor = getRandomItem(pollColors)

export const ColorPicker = ({ initialColor, onChange }: ColorPickerProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [color, setColor] = useState(initialColor ?? randomColor)

  const handleOnChangeColor = useCallback(
    (selectedColor: PollColors) => {
      setColor(selectedColor)
      setIsPopoverOpen(false)
      onChange(selectedColor)
    },
    [onChange]
  )

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Trigger asChild>
        <button
          aria-label="Choose a color"
          title="Click to choose a color"
          className={tw`w-6 h-6 rounded-md overflow-hidden inline-flex items-center justify-center
          cursor-pointer relative focus:(outline-none ring-2 ring-offset-1 ring-black)`}
        >
          <div
            className={tw`w-full h-full bg-[${color}] bg-opacity-40 absolute`}
          />

          <div className={tw`bg-[${color}] w-3 h-3 rounded-full`} />
        </button>
      </Popover.Trigger>

      <Popover.Content
        sideOffset={5}
        side="top"
        className={tw`rounded-md p-5 w-52 bg-white shadow-lg animate-slideUpAndFade focus:(ring-1 ring-primary)`}
      >
        <div className={tw`flex flex-col gap-1.5`}>
          <span className="m-0 text-gray-800 text-base leading-5 font-medium">
            Option Color
          </span>

          <p className={tw`text-gray-500 text-xs`}>
            Choose a color for your poll option, this will be shown on your poll
            results page.
          </p>

          <div className={tw`grid grid-cols-5 gap-2 mt-2`}>
            {pollColors.map((PollColors) => (
              <SelectableColor
                key={`color-to-select-${PollColors}`}
                color={PollColors}
                onClick={handleOnChangeColor}
                isSelected={PollColors === color}
              />
            ))}
          </div>
        </div>

        <Popover.Arrow
          width={16}
          height={8}
          className={tw`text-white fill-current`}
        />

        <Popover.Close autoFocus asChild aria-label="Close">
          <CloseButton className={tw`absolute top-1.5 right-1.5`} />
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  )
}
