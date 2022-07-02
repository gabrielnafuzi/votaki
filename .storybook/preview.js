import twindConfig from '../src/twind.config'
import * as colors from 'twind/colors'
import { setup } from 'twind/shim'

setup(twindConfig)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: colors.gray[800],
      },
      {
        name: 'light',
        value: colors.white,
      },
    ],
  },
}
