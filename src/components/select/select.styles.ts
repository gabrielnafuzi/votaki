import { apply, tw } from 'twind'

export const trigger = apply`form-input inline-flex items-center justify-between rounded-md text-primary shadow-sm
  text-sm w-full gap-1.5 bg(white hover:(gray-100 data-disabled:white)) transition-colors ease-in-out px-3 h-[42px]
  border(1 gray-300 focus:primary) focus:(ring-1 ring-primary) data-disabled:(opacity-60 cursor-not-allowed)`

export const triggerError = apply`border-error bg-subtleError hover:(data-disabled:bg-subtleError)`

export const content = tw`overflow-hidden bg-white rounded-md shadow-md border border-gray-300`

export const viewport = tw`p-1.5`

export const item = tw`text(sm primary) leading-none rounded-sm flex items-center h-8 pr-9 pl-6 relative
  select-none data-disabled:(text-gray-400 cursor-not-allowed pointer-events-none) focus:(bg-primary text-white outline-none)`

export const itemIndicator = tw`absolute left-0 w-6 inline-flex items-center justify-center`

export const scrollButton = tw`flex items-center justify-center h-6 bg-white text-primary cursor-default`
