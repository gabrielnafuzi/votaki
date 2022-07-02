import twindConfig from '../src/twind.config'
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
}
