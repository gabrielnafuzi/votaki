import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner } from './spinner'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export const Default: ComponentStory<typeof Spinner> = () => <Spinner />
