import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PriorityLine } from "./priorities-line";

export default {
  title: "Atoms/PriorityLine",
  component: PriorityLine,
} as ComponentMeta<typeof PriorityLine>;

const Template: ComponentStory<typeof PriorityLine> = (args) => (
  <PriorityLine {...args} />
);

export const Priority_Line = Template.bind({});
Priority_Line.args = {
  priority: {
    rgb: "#ee0909",
    id: 103490,
    name: "Критический",
  },
};
