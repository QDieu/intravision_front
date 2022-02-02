import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CreateTaskForm } from ".";

export default {
  title: "Molecules/CreateTaskForm",
  component: CreateTaskForm,
} as ComponentMeta<typeof CreateTaskForm>;

const Template: ComponentStory<typeof CreateTaskForm> = (args) => (
  <CreateTaskForm {...args} />
);

export const Create_Task_Form = Template.bind({});
Create_Task_Form.args = {};
