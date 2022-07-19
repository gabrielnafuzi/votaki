import { forwardRef } from 'react'

import { tw } from 'twind'

import { Spinner } from '../spinner'
import { baseStyles, disabledStyles, sizes, variants } from './button.styles'

export type Variants = 'solid' | 'outline' | 'text'
export type Sizes = 'small' | 'medium' | 'large'

type ButtonProps = {
  variant?: Variants
  size?: Sizes
  children: React.ReactNode
  isLoading?: boolean
  fullWidth?: boolean
  icon?: JSX.Element
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

const BaseButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    variant = 'solid',
    size = 'small',
    isLoading = false,
    fullWidth = false,
    children,
    disabled = false,
    icon,
    ...props
  },
  ref
) => {
  const classes = tw`
    ${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles}
    ${fullWidth ? 'w-full' : 'w-auto'}
  `

  return (
    <button
      aria-busy={isLoading}
      className={classes}
      ref={ref}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Spinner className={tw`mr-2`} />}

      <span>{children}</span>

      {icon && <div className={tw`ml-2`}>{icon}</div>}
    </button>
  )
}

export const Button = forwardRef(BaseButton)
