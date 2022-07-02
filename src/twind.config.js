import * as colors from 'twind/colors'

/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      colors: {
        primary: colors.violet[600],
        error: colors.red[500],
        success: colors.emerald[500],
      },
    },
  },
}
