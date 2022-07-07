import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { tw } from 'twind'

type CheckboxProps = {
  label: string
  name: string
} & Omit<RadixCheckbox.CheckboxProps, 'id'>

export const Checkbox = ({ label, name, ...props }: CheckboxProps) => {
  const checkboxStyles = tw`
    bg(gray-50 hover:gray-100) w-6 h-6 rounded flex items-center transition
    justify-center shadow border border(gray-200 focus:primary) focus:outline-none
  `

  return (
    <div className={tw`flex items-center`}>
      <RadixCheckbox.Root className={checkboxStyles} id={name} {...props}>
        <RadixCheckbox.Indicator className={tw`text-primary`}>
          <CheckIcon width={22} height={22} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>

      <label
        htmlFor={name}
        className={tw`pl-2 text-gray-700 select-none cursor-pointer`}
      >
        {label}
      </label>
    </div>
  )
}
