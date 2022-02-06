import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createTask } from '../../../features/redux/task-reducer';
import { ITask } from '../../../shared/types/Task';
import { CreateTaskForm } from '../../../shared/ui/core/molecules';

export const CreateTaskFormConnector: React.FC<{}> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onCloseTaskForm = () => {
        navigate('/');
    };

    const callbackNavigate = (task: ITask) => {
        navigate('/edit', { state: task });
    };

    const onCreate = (name: string, description: string) => {
        dispatch(createTask(name, description, callbackNavigate));
    };

    return <CreateTaskForm onCloseTaskForm={onCloseTaskForm} onCreate={onCreate} />;
};
