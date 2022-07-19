import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../button'
import { Input } from '../input'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './dialog'

export default {
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

export const Default: ComponentStory<typeof DialogContent> = (args) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>

    <DialogContent {...args}>
      <div className="flex flex-col gap-3">
        <Input name="name" label="Name" />

        <div>
          <Input name="username" label="Username" />
        </div>

        <DialogClose className="ml-auto" asChild>
          <Button>Save changes</Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
)

Default.args = {
  title: 'Edit profile',
  description:
    "Make changes to your profile here. Click save when you're done.",
}
