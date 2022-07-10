import { apply, tw } from 'twind'

export const inputWrapper = apply`form-input py-0 px-3 flex items-center rounded-md
  bg-white border(1 gray-300 focus-within:primary) focus-within:(ring-1 ring-primary)
  shadow-sm`

export const input = tw`sm:text-sm text-gray-800 border-0 outline-none bg-transparent w-full py-2 flex-1`
export const inputError = apply`border-error bg-subtleError`
export const disabled = apply`bg-gray-100 opacity-60 cursor-not-allowed`

export const rightElementWrapper = tw`ml-1.5`
