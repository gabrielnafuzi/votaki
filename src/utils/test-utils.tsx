import React from 'react'

import { render } from '@testing-library/react'

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export const mockComponentWithChildren = ({
  children,
}: {
  children: React.ReactNode
}) => <div>{children}</div>

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export { customRender as render }
