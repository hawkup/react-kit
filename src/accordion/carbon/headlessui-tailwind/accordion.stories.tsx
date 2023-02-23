import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";

import tailwindcss from 'tailwindcss/tailwind.css?inline'

const meta = {
  title: "Accordion/Carbon/Headless UI - Tailwind",
  component: Accordion,
  decorators: [
    (Story) => (
      <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        </style>
        <style>{tailwindcss.toString()}</style>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item>
        <Accordion.Header>Is team pricing available?</Accordion.Header>
        <Accordion.Panel>Yes! You can purchase a license that you can share with your entire team.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
};
