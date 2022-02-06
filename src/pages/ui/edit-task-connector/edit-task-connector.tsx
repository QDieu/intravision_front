import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ITask } from '../../../shared/types/Task';
import { EditTask } from './../../../shared/ui/core/organisms';

export const EditTaskConnector: React.FC<{}> = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const task = location.state as ITask;

    const onCloseEditForm = () => {
        navigate('/');
    };

    return <EditTask task={task} onCloseEditForm={onCloseEditForm} />;
};
