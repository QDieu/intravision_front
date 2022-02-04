import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditTaskBarInfo } from '.';

export default {
    title: 'Atoms/EditTaskBarInfo',
    component: EditTaskBarInfo,
} as ComponentMeta<typeof EditTaskBarInfo>;

const Template: ComponentStory<typeof EditTaskBarInfo> = (args) => <EditTaskBarInfo {...args} />;

export const Edit_Task_Bar = Template.bind({});
Edit_Task_Bar.args = {
    statusColor: 'red',
    statusName: 'В работе',
    executorName: 'Петров Борис',
    initiatorName: 'Иванов Андрей',
    priorityName: 'Средний',
    resolutionDatePlan: '2022-02-02T15:36:56.881577',
    tags: [
        { name: 'Сервер', id: 1 },
        { name: 'mb_support_mymercedes', id: 2 },
    ],
};
