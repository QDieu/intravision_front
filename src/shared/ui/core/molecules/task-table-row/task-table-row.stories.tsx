import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskTableRow } from './task-table-row';
import { TaskTableHead } from '.';

export default {
    title: 'Molecules/TaskTableRow',
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
    task: {
        id: 191593,
        name: 'Заказать обед',
        description:
            '<p style="color: #e5e5e5;">Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ',
        createdAt: '2022-02-02T15:36:56.881577',
        updatedAt: '2022-02-02T15:36:56.881577',
        price: 100,
        taskTypeId: 70093,
        taskTypeName: 'Стандартный',
        statusId: 120186,
        statusName: 'Открыта',
        statusRgb: '#fd5e53',
        priorityId: 103488,
        priorityName: 'Средний',
        serviceId: 70092,
        serviceName: 'Еда > Заказ обедов',
        resolutionDatePlan: '2022-02-02T15:36:56.881577',
        initiatorId: 70094,
        initiatorName: 'Иванов Андрей',
        executorId: 70093,
        executorName: 'Петров Борис',
        executorGroupId: 70092,
        executorGroupName: 'Офис менеджеры',
    },
    priority: {
        rgb: '#ee0909',
        id: 103490,
        name: 'Критический',
    },
    status: {
        rgb: '#fcad51',
        id: 120185,
        name: 'В работе',
    },
};
