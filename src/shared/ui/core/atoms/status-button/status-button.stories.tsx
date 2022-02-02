import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StatusButton } from "./status-button";

export default {
  title: "Atoms/StatusButton",
  component: StatusButton,
} as ComponentMeta<typeof StatusButton>;

const Template: ComponentStory<typeof StatusButton> = (args) => (
  <StatusButton {...args} />
);

export const Status_button = Template.bind({});

Status_button.args = {
  status: {
    rgb: "#fcad51",
    id: 120185,
    name: "В работе",
  },
};
