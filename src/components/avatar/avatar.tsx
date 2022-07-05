import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { apply, tw } from 'twind'

import { getInitials } from '@/utils/get-initials'

type AvatarPropsSize = 'small' | 'medium' | 'large'

export type AvatarProps = {
  name: string
  size?: AvatarPropsSize
  src?: string
  isFullRounded?: boolean
}

type Size = {
  font: string
  root: string
}

const sizes: Record<AvatarPropsSize, Size> = {
  small: { font: 'sm', root: '10' },
  medium: { font: 'xl', root: '16' },
  large: { font: '3xl', root: '24' },
}

export const Avatar = ({
  size = 'small',
  name,
  src,
  isFullRounded = true,
}: AvatarProps) => {
  const delayMs = src ? 500 : 0

  const selectedSize = sizes[size]

  const rounded = isFullRounded ? 'rounded-full' : 'rounded-md'
  const baseRootStyles = apply`inline-flex items-center justify-center align-middle overflow-hidden select-none`
  const root = tw`${baseRootStyles} ${rounded} h-${selectedSize.root} w-${selectedSize.root}`

  return (
    <AvatarPrimitive.Avatar className={root}>
      <AvatarPrimitive.AvatarImage
        className={tw`w-full h-full object-cover`}
        src={src}
        alt={name}
      />

      <AvatarPrimitive.AvatarFallback
        className={tw`w-full h-full flex justify-center items-center bg-gray-200 text(primary ${selectedSize.font}) font-medium`}
        delayMs={delayMs}
      >
        {getInitials(name)}
      </AvatarPrimitive.AvatarFallback>
    </AvatarPrimitive.Avatar>
  )
}
