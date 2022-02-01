import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarTab } from "./sidebar-tab";
import { Icons } from "../../../icons";

export default {
  title: "Atoms/SidebarTab",
  component: SidebarTab,
} as ComponentMeta<typeof SidebarTab>;

const Template: ComponentStory<typeof SidebarTab> = (args) => (
  <SidebarTab {...args} />
);

export const Sidebar_tab = Template.bind({});

Sidebar_tab.args = {
  tab: [<Icons.Presentation />, "База знаний"],
};
