import { useCallback, useMemo, useState } from 'react'

type Callbacks = {
  onOpen?: () => void
  onClose?: () => void
}

export const useDisclosure = (
  initialState = false,
  callbacks: Callbacks = {}
) => {
  const [opened, setOpened] = useState(initialState)

  const { onClose, onOpen } = callbacks

  const open = useCallback(() => {
    if (!opened) {
      setOpened(true)

      onOpen?.()
    }
  }, [onOpen, opened])

  const close = useCallback(() => {
    if (opened) {
      setOpened(false)

      onClose?.()
    }
  }, [onClose, opened])

  const toggle = useCallback(() => {
    opened ? close() : open()
  }, [open, close, opened])

  return useMemo(
    () => [opened, { open, close, toggle }] as const,
    [close, open, opened, toggle]
  )
}
