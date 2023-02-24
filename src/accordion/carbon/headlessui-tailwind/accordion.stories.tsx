import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";

import tailwindcss from '@/styles/carbon.css?inline'

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
  args: {
    children: (
      <>
        <Accordion.Item>
          <Accordion.Header>Title of accordion</Accordion.Header>
          <Accordion.Panel>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Title of accordion</Accordion.Header>
          <Accordion.Panel>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Title of accordion</Accordion.Header>
          <Accordion.Panel>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Title of accordion</Accordion.Header>
          <Accordion.Panel>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.</Accordion.Panel>
        </Accordion.Item>
      </>
    )
  }
};
