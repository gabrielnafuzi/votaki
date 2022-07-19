import { tw } from 'twind'

import type { Sizes, Variants } from './button'

export const baseStyles = tw`inline-flex items-center justify-center w-full px-4 py-2 transition-colors rounded-md font-medium text-sm focus:(outline-none ring(2 violet-400)`

export const sizes: Record<Sizes, string> = {
  small: tw`h-10 text-sm`,

  medium: tw`h-12 text-base`,

  large: tw`h-14 text-xl`,
}

export const variants: Record<Variants, string> = {
  solid: tw`border(2 primary) shadow-sm text-white bg(primary hover:(violet-700 disabled:(primary)))`,

  text: tw`text(gray-700 hover:(gray-800 disabled:gray-700)) p-0`,

  outline: tw`text-gray-700 hover:(bg-gray-100) border(2 gray-700)`,
}

export const disabledStyles = tw`disabled:(cursor-not-allowed opacity-50)`
