import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { fetchPriorities } from '../../../features/redux/priorities-reducer';
import { fetchStatuses } from '../../../features/redux/status-reducer';
import { TAppState } from '../../../features/redux/store';
import { fetchTasks } from '../../../features/redux/task-reducer';
import { fetchUser } from '../../../features/redux/users-reducer';
import { ITask } from '../../../shared/types/Task';
import { MainPage } from '../../../shared/ui/core/pages';

export const MainPageConnector: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const { tasks, priorities, statuses, tenatId, users } = useSelector((state: TAppState) => {
        return {
            tasks: state.task.tasks,
            priorities: state.priorities.priorities,
            statuses: state.statuses.statuses,
            tenatId: state.app.Tenatguid,
            users: state.users.users,
        };
    });

    const navigate = useNavigate();

    React.useEffect(() => {
        dispatch(fetchTasks(tenatId));
        dispatch(fetchPriorities(tenatId));
        dispatch(fetchStatuses(tenatId));
        dispatch(fetchUser(tenatId));
    }, [tenatId]);

    const onTaskCreateForm = () => {
        navigate('/new');
    };

    const onEditTask = (index: number) => {
        navigate('/edit', {
            state: {
                index: index,
            },
        });
    };

    return tasks ? (
        <>
            <MainPage
                priority={priorities}
                status={statuses}
                tasks={tasks}
                onTaskCreateForm={onTaskCreateForm}
                onEditTask={onEditTask}
                users={users}
            />
            <Outlet />
        </>
    ) : (
        <div>Loading</div>
    );
};
