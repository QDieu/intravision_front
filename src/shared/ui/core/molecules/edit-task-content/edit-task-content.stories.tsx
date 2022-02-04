import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditTaskContent } from '.';

export default {
    title: 'Molecules/EditTaskContent',
    component: EditTaskContent,
} as ComponentMeta<typeof EditTaskContent>;

const Template: ComponentStory<typeof EditTaskContent> = (args) => <EditTaskContent {...args} />;

export const Edit_Task_Content = Template.bind({});
Edit_Task_Content.args = {
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
};
