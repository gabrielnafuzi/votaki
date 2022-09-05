import userEvent from '@testing-library/user-event'

const { click } = userEvent

export const press = {
  Enter: () => userEvent.keyboard('[Enter]'),
  Space: () => userEvent.keyboard('[Space]'),
  Tab: () => userEvent.tab(),
}

export const type = userEvent.keyboard
export const typeOnElement = userEvent.type

export { click, userEvent }
