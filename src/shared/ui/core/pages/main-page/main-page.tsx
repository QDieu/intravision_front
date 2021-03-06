import React from 'react';
import { TPriority } from '../../../../types/Priority';
import { TStatus } from '../../../../types/Status';
import { ITask } from '../../../../types/Task';
import { TUser } from '../../../../types/User';
import { Header } from '../../molecules';
import { TaskTable } from '../../organisms';
import { MainTemplate } from '../../templates';

type TProps = {
    tasks: Array<ITask>;
    priority: Array<TPriority>;
    status: Array<TStatus>;
    users: Array<TUser>;
    onTaskCreateForm: () => void;
    onEditTask: (index: number) => void;
};

export const MainPage: React.FC<TProps> = ({
    tasks,
    priority,
    status,
    onTaskCreateForm,
    onEditTask,
    users,
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
                        users={users}
                    />
                }
                header={<Header />}
            />
        </>
    );
};
