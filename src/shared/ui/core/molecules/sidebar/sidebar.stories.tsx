import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar } from "./sidebar";

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Sidebar_ = Template.bind({});
Sidebar_.args = {};
