import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { CloseButton } from './close-button'

export default {
  title: 'CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>

export const Default: ComponentStory<typeof CloseButton> = () => <CloseButton />
