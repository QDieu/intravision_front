import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderSearchInput } from "./header-search-input";

export default {
  title: "Atoms/HeaderSearchInput",
  component: HeaderSearchInput,
} as ComponentMeta<typeof HeaderSearchInput>;

const Template: ComponentStory<typeof HeaderSearchInput> = (args) => (
  <HeaderSearchInput {...args} />
);

export const Header_Search = Template.bind({});
Header_Search.args = {};
