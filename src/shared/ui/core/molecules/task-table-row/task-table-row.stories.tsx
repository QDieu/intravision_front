import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TaskTableRow } from "./task-table-row";
import { TaskTableHead } from ".";

export default {
  title: "Molecules/TaskTableRow",
  component: TaskTableRow,
} as ComponentMeta<typeof TaskTableRow>;

const Template: ComponentStory<typeof TaskTableRow> = (args) => (
  <>
    <table>
      <TaskTableHead />
      <TaskTableRow {...args} />
    </table>
  </>
);

export const TaskTable_Row = Template.bind({});
TaskTable_Row.args = {
  id: 50061,
  executor: "Менеджеров Сергей",
  name: "Не работает кнопка",
  priority: {
    rgb: "#ee0909",
    id: 103490,
    name: "Критический",
  },
  status: {
    rgb: "#fcad51",
    id: 120185,
    name: "В работе",
  },
};
