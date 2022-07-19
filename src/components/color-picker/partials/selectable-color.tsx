import { tw } from 'twind'

import type { ColorToSelect } from '@/components/common'

type SelectableColorProps = {
  color: ColorToSelect
  onClick: (color: ColorToSelect) => void
  isSelected: boolean
}

const defaultStyles = `w-5 h-5 rounded-full cursor-pointer transition-colors hover:opacity-80 focus:(outline-none ring-2 ring-primary)`
const selectedColorStyles = `ring-2 ring-offset-2 ring-primary focus:(ring-4 ring-offset-0)`

export const SelectableColor = ({
  color,
  onClick,
  isSelected,
}: SelectableColorProps) => {
  const handleOnClick = () => {
    onClick(color)
  }

  return (
    <button
      title={color}
      aria-label={`Select ${color}`}
      onClick={handleOnClick}
      className={tw`bg-[${color}] ${defaultStyles} ${
        isSelected && selectedColorStyles
      }`}
    />
  )
}
