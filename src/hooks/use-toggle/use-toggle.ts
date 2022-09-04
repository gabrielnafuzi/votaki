import { Reducer, useReducer } from 'react'

const toggleReducer = (state: boolean, nextValue?: unknown) =>
  typeof nextValue === 'boolean' ? nextValue : !state

export const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: unknown) => void] => {
  return useReducer<Reducer<boolean, unknown>>(toggleReducer, initialValue)
}
