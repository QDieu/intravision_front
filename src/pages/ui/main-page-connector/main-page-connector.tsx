import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { fetchPriorities } from '../../../features/redux/priorities-reducer';
import { fetchStatuses } from '../../../features/redux/status-reducer';
import { TAppState } from '../../../features/redux/store';
import { fetchTasks } from '../../../features/redux/task-reducer';
import { ITask } from '../../../shared/types/Task';
import { MainPage } from '../../../shared/ui/core/pages';

export const MainPageConnector: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const { tasks, priorities, statuses, tenatId } = useSelector((state: TAppState) => {
        return {
            tasks: state.task.tasks,
            priorities: state.priorities.priorities,
            statuses: state.statuses.statuses,
            tenatId: state.app.Tenatguid,
        };
    });

    const navigate = useNavigate();

    React.useEffect(() => {
        dispatch(fetchTasks(tenatId));
        dispatch(fetchPriorities(tenatId));
        dispatch(fetchStatuses(tenatId));
    }, [tenatId]);

    const onTaskCreateForm = () => {
        navigate('/new');
    };

    const onEditTask = (task: ITask) => {
        navigate('/edit', { state: task });
    };

    return tasks ? (
        <>
            <MainPage
                priority={priorities}
                status={statuses}
                tasks={tasks}
                onTaskCreateForm={onTaskCreateForm}
                onEditTask={onEditTask}
            />
            <Outlet />
        </>
    ) : (
        <div>Loading</div>
    );
};
