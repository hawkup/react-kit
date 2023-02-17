import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";

const meta = {
  title: "Basics/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    imageSrc:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    alt: "Colm Tuite",
  }
};

export const Fallback: Story = {
  args: {
    imageSrc: "",
    alt: "Colm Tuite",
  }
};
