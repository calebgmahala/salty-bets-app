import type { Meta } from "@storybook/react";

import { SaltyBetsB } from ".";

const meta: Meta<typeof SaltyBetsB> = {
  component: SaltyBetsB,
};

export default meta;

export const Primary = () => <SaltyBetsB className="w-10" />;
