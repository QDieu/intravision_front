import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditTaskHeader } from '.';

export default {
    title: 'Atoms/EditTaskHeader',
    component: EditTaskHeader,
} as ComponentMeta<typeof EditTaskHeader>;

const Template: ComponentStory<typeof EditTaskHeader> = (args) => <EditTaskHeader {...args} />;

export const Edit_Task_Bar = Template.bind({});
Edit_Task_Bar.args = {
    id: 67304,
    taskName:
        'Просьба оценить разработку рекламного баннера на новорижском шоссе. Форматы 600x500x30. Материал – полиестирол хорошего качества.',
};
