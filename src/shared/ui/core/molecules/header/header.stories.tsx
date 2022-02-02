import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./header";

export default {
  title: "Molecules/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Header_Search = Template.bind({});
Header_Search.args = {};
