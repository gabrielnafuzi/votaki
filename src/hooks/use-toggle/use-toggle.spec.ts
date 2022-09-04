import { describe, it, expect } from 'vitest'

import { act, renderHook } from '@/utils/test-utils'

import { useToggle } from './use-toggle'

const setUp = (initialValue: boolean) =>
  renderHook(() => useToggle(initialValue))

describe('useToggle()', () => {
  it('init with state true', () => {
    const { result } = setUp(true)

    expect(result.current[0]).toBe(true)
    expect(typeof result.current[1]).toBe('function')
  })

  it('init with state false', () => {
    const { result } = setUp(false)

    expect(result.current[0]).toBe(false)
    expect(typeof result.current[1]).toBe('function')
  })

  it('set state to true', () => {
    const { result } = setUp(false)
    const [, toggle] = result.current

    expect(result.current[0]).toBe(false)

    act(() => {
      toggle(true)
    })

    expect(result.current[0]).toBe(true)
  })

  it('set state to false', () => {
    const { result } = setUp(true)
    const [, toggle] = result.current

    expect(result.current[0]).toBe(true)

    act(() => {
      toggle(false)
    })

    expect(result.current[0]).toBe(false)
  })

  it('toggle state from true', () => {
    const { result } = setUp(true)
    const [, toggle] = result.current

    act(() => {
      toggle()
    })

    expect(result.current[0]).toBe(false)
  })

  it('toggle state from false', () => {
    const { result } = setUp(false)
    const [, toggle] = result.current

    act(() => {
      toggle()
    })

    expect(result.current[0]).toBe(true)
  })

  it('ignores non-boolean parameters and toggle state', () => {
    const { result } = setUp(true)
    const [, toggle] = result.current

    act(() => {
      toggle('string')
    })

    expect(result.current[0]).toBe(false)

    act(() => {
      toggle({})
    })

    expect(result.current[0]).toBe(true)
  })
})
