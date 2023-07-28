import type { Meta, StoryObj } from '@storybook/react'

import { ImageUploader } from '../components'

const meta = {
  title: 'Components/ImagesUploader',
  component: ImageUploader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ImageUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    config: {
      dragDropClassName: '',
      addImagesButton: {
        className: 'bg-neutral-100 hover:neutral-800"',
        text: 'Elegir imagenes',
      },
    },
  },
}
