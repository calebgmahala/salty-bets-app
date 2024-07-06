import type { Meta, StoryObj } from "@storybook/react";

import * as Icons from "./";

const AllIcons = () => {
  return (
    <div className="flex gap-1">
      {Object.entries(Icons).map(([IconName, Icon]) => (
        <div className="flex flex-col justify-center items-center border-2 w-fit p-2">
          <p>{IconName}</p>
          <Icon className="w-10"></Icon>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof AllIcons> = {
  component: AllIcons,
};

export default meta;

type Story = StoryObj<typeof AllIcons>;

export const Primary: Story = {};
