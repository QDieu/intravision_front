import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { TAppState } from '../../../features/redux/store';
import { addCommentTask } from '../../../features/redux/task-reducer';
import { EditTask } from './../../../shared/ui/core/organisms';

type MyState = {
    index: number;
};

export const EditTaskConnector: React.FC<{}> = () => {
    console.log('RERENDER');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = location.state as MyState;
    const index = state.index;
    const { task, users, statuses, priorities } = useSelector((state: TAppState) => ({
        task: state.task.tasks,
        users: state.users.users,
        statuses: state.statuses.statuses,
        priorities: state.priorities.priorities,
    }));

    const onCloseEditForm = () => {
        navigate('/');
    };

    const addComment = (comment: string) => {
        task[index].comment = comment;
        dispatch(addCommentTask(task[index]));
    };

    return (
        <EditTask
            task={task[index]}
            onCloseEditForm={onCloseEditForm}
            addComment={addComment}
            users={users}
            statuses={statuses}
            priorities={priorities}
        />
    );
};
