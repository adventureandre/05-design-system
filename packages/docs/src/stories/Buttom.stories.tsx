import { Button } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: { children: 'enviar' },
}
export const Seconday: StoryObj = {
  args: {
    children: 'Test',
  },
}
