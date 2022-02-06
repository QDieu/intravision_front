import React from 'react';
import { TPriority } from '../../../../types/Priority';
import { TStatus } from '../../../../types/Status';
import { ITask } from '../../../../types/Task';
import { Header } from '../../molecules';
import { TaskTable } from '../../organisms';
import { MainTemplate } from '../../templates';

type TProps = {
    tasks: Array<ITask>;
    priority: Array<TPriority>;
    status: Array<TStatus>;
    onTaskCreateForm: () => void;
    onEditTask: (task: ITask) => void;
};

export const MainPage: React.FC<TProps> = ({
    tasks,
    priority,
    status,
    onTaskCreateForm,
    onEditTask,
}) => {
    return (
        <>
            <MainTemplate
                content={
                    <TaskTable
                        tasks={tasks}
                        priority={priority}
                        status={status}
                        onTaskCreateForm={onTaskCreateForm}
                        onEditTask={onEditTask}
                    />
                }
                header={<Header />}
            />
        </>
    );
};
