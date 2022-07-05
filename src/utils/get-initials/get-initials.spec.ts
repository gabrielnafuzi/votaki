import { it, expect, describe } from 'vitest'

import { getInitials } from './get-initials'

describe('getInitial()', () => {
  it('returns first name initial if only first name is provided', () => {
    expect(getInitials('John')).toEqual('J')
  })

  it('returns first and last name initials if both are provided', () => {
    expect(getInitials('John Doe')).toEqual('JD')
  })
})
