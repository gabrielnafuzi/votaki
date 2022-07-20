import { forms, formInput } from '@twind/forms'
import * as colors from 'twind/colors'

const baseCubic = 'cubic-bezier(0.16, 1, 0.3, 1)'

const makeSlideAnimation = (name) => `${name} 400ms ${baseCubic} forwards`

/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.violet[600],
        error: colors.red[500],
        subtleError: '#fff7f7',
        success: colors.emerald[500],
      },
      keyframes: {
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        slideDownAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        slideRightAndFade: {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        slideLeftAndFade: {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        contentShow: {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        slideUpAndFade: makeSlideAnimation('slideUpAndFade'),

        slideDownAndFade: makeSlideAnimation('slideDownAndFade'),

        slideRightAndFade: makeSlideAnimation('slideRightAndFade'),

        slideLeftAndFade: makeSlideAnimation('slideLeftAndFade'),

        show: `show 150ms ${baseCubic} forwards`,

        contentShow: `contentShow 150ms ${baseCubic} forwards`,
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
