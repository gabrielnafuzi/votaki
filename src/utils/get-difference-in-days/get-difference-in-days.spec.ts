import { describe, it, expect } from 'vitest'

import { getDifferenceInDays } from './get-difference-in-days'

describe('getDifferenceInDays()', () => {
  it('returns the difference in days between two dates', () => {
    expect(
      getDifferenceInDays({
        from: new Date('2021-01-01'),
        to: new Date('2020-01-02'),
      })
    ).toBe('365 days ago')

    expect(
      getDifferenceInDays({
        from: new Date('2022-07-19'),
        to: new Date('2022-06-28'),
      })
    ).toBe('21 days ago')
  })

  it('returns the difference in days between two dates in a different locale', () => {
    expect(
      getDifferenceInDays({
        from: new Date('2021-01-01'),
        to: new Date('2020-01-02'),
        locale: 'pt-BR',
      })
    ).toBe('há 365 dias')

    expect(
      getDifferenceInDays({
        from: new Date('2022-07-19'),
        to: new Date('2022-06-28'),
        locale: 'fr',
      })
    ).toBe('il y a 21 jours')

    expect(
      getDifferenceInDays({
        from: new Date('2022-07-19'),
        to: new Date('2022-06-28'),
        locale: 'de',
      })
    ).toBe('vor 21 Tagen')
  })
})
