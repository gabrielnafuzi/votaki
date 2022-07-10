import { forms, formInput } from '@twind/forms'
import * as colors from 'twind/colors'

/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.violet[600],
        error: colors.red[500],
        success: colors.emerald[500],
      },
    },
  },
  plugins: {
    forms,
    'form-input': formInput,
  },
  variants: {
    'data-disabled': '&[data-disabled]',
  },
}
