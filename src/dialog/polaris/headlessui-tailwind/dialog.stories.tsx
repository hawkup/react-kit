import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./dialog";

import tailwindcss from '@/styles/polaris.css?inline'

const meta = {
  title: "Dialog/Polaris/Headless UI - Tailwind",
  component: Dialog,
  decorators: [
    (Story) => (
      <>
        <style>{tailwindcss.toString()}</style>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content>
            <Dialog.Title>
              Title
            </Dialog.Title>
            <Dialog.Description>
              Content
            </Dialog.Description>
            <Dialog.Footer>
              <button>Secondary action</button>
              <button>Primary action</button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </>
    )
  }
};
