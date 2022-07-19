import { Cross2Icon } from '@radix-ui/react-icons'
import { tw } from 'twind'

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CloseButton = ({ className, ...props }: CloseButtonProps) => {
  const classes = tw`
    h-6 w-6 inline-flex items-center justify-center text-violet-800
    rounded-full transition-colors hover:bg-violet-200 focus:(ring(2 violet-300) outline-none)
    ${className}`

  return (
    <button className={classes} {...props}>
      <Cross2Icon />
    </button>
  )
}
