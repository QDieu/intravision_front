import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createTask } from '../../../features/redux/task-reducer';
import { CreateTaskForm } from '../../../shared/ui/core/molecules';

export const CreateTaskFormConnector: React.FC<{}> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onCloseTaskForm = () => {
        navigate('/');
    };

    const callbackNavigate = (index: number) => {
        navigate('/edit', { state: { index: index } });
    };

    const onCreate = (name: string, description: string) => {
        dispatch(createTask(name, description, callbackNavigate));
    };

    return <CreateTaskForm onCloseTaskForm={onCloseTaskForm} onCreate={onCreate} />;
};
