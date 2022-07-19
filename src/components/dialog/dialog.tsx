import { forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { tw } from 'twind'

import { CloseButton } from '../close-button'

type DialogContentProps = {
  title?: string
  description?: string
} & DialogPrimitive.DialogContentProps

const BaseDialogContent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DialogContentProps
> = ({ children, title, description, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={tw`fixed inset-0 animate-show bg-black bg-opacity-40`}
    />

    <DialogPrimitive.Content
      {...props}
      className={tw`
        bg-white rounded-md shadow-md fixed top-1/2 left-1/2 translate-2/4 w-[90vw]
        max-w-md max-h-[85vh] p-6 animate-contentShow focus:outline-none
      `}
      ref={forwardedRef}
    >
      {title && (
        <DialogPrimitive.Title
          className={tw`font-medium text-xl text-gray-800 m-0`}
        >
          {title}
        </DialogPrimitive.Title>
      )}

      {description && (
        <DialogPrimitive.Description
          className={tw`mt-2 mb-5 text-sm text-gray-500 leading-normal`}
        >
          {description}
        </DialogPrimitive.Description>
      )}

      {children}

      <DialogPrimitive.Close asChild aria-label="Close">
        <CloseButton className={tw`absolute top-2.5 right-2.5`} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
)

export const DialogContent = forwardRef(BaseDialogContent)
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
