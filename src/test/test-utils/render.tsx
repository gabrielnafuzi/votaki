import React from 'react'

import { render } from '@testing-library/react'

export const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export const mockComponentWithChildren = ({
  children,
}: {
  children: React.ReactNode
}) => <div>{children}</div>
