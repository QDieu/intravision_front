import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditTaskComment } from '.';

export default {
    title: 'Atoms/EditTaskComment',
    component: EditTaskComment,
} as ComponentMeta<typeof EditTaskComment>;

const Template: ComponentStory<typeof EditTaskComment> = (args) => <EditTaskComment {...args} />;

export const Edit_Task_Comment = Template.bind({});
Edit_Task_Comment.args = {
    comment:
        'Длительное время занимает сохранение продажи (вне зависимости от кол-ва добавленных товаров). Проверить, почему занимает столько времени. Это третья строка Это третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строка  третья строка  тья строка  тья строка  конец!',
};
