import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";

import tailwindcss from 'tailwindcss/tailwind.css?inline'

const meta = {
  title: "Accordion/Carbon/Headless UI - Tailwind",
  component: Accordion,
  decorators: [
    (Story) => (
      <>
        <style>{tailwindcss.toString()}</style>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {}
};
