import { apply, tw } from 'twind'

export const inputWrapper = apply`form-input py-0 px-3 flex mt-1 items-center rounded-md
          bg-white border(1 gray-300 focus-within:primary) focus-within:(ring-1 ring-primary)
          shadow-sm`

export const input = tw`sm:text-sm text-gray-800 border-0 outline-none bg-transparent w-full py-2 flex-1`
export const inputError = apply`border-red-500 bg-red-50`
export const inputDisabled = apply`bg-gray-100 opacity-60 cursor-not-allowed`

export const label = apply`block text-sm font-medium text-gray-700`
export const labelError = apply`text-red-500`

export const errorMessage = tw`text-red-500 text-sm mt-0.5`

export const rightElementWrapper = tw`ml-1.5`
