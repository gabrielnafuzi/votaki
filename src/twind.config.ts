import { forms, formInput } from '@twind/forms'
import * as colors from 'twind/colors'

enum ANIMATIONS {
  SLIDE_UP_AND_FADE = 'slideUpAndFade',
  SLIDE_DOWN_AND_FADE = 'slideDownAndFade',
  SLIDE_LEFT_AND_FADE = 'slideLeftAndFade',
  SLIDE_RIGHT_AND_FADE = 'slideRightAndFade',
  SHOW = 'show',
  CONTENT_SHOW = 'contentShow',
}

const baseCubic = 'cubic-bezier(0.16, 1, 0.3, 1)'

const makeSlideAnimation = (name: string) =>
  `${name} 400ms ${baseCubic} forwards`

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
        [ANIMATIONS.SLIDE_UP_AND_FADE]: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        [ANIMATIONS.SLIDE_DOWN_AND_FADE]: {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        [ANIMATIONS.SLIDE_RIGHT_AND_FADE]: {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        [ANIMATIONS.SLIDE_LEFT_AND_FADE]: {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },

        [ANIMATIONS.SHOW]: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        [ANIMATIONS.CONTENT_SHOW]: {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        [ANIMATIONS.SLIDE_UP_AND_FADE]: makeSlideAnimation(
          ANIMATIONS.SLIDE_UP_AND_FADE
        ),

        [ANIMATIONS.SLIDE_DOWN_AND_FADE]: makeSlideAnimation(
          ANIMATIONS.SLIDE_DOWN_AND_FADE
        ),

        [ANIMATIONS.SLIDE_RIGHT_AND_FADE]: makeSlideAnimation(
          ANIMATIONS.SLIDE_RIGHT_AND_FADE
        ),

        [ANIMATIONS.SLIDE_LEFT_AND_FADE]: makeSlideAnimation(
          ANIMATIONS.SLIDE_LEFT_AND_FADE
        ),

        [ANIMATIONS.SHOW]: `${ANIMATIONS.SHOW} 150ms ${baseCubic} forwards`,

        [ANIMATIONS.CONTENT_SHOW]: `${ANIMATIONS.CONTENT_SHOW} 150ms ${baseCubic} forwards`,
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
