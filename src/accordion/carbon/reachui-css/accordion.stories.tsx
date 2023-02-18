import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";

const meta = {
  title: "Accordion/Carbon/Reach UI - CSS",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {}
};
