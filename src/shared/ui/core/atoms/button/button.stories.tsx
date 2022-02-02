import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button_ = Template.bind({});
Button_.args = {
  onClickButton: () => {},
  text: "Сохранить",
};
