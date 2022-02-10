import { TaskAPI } from '../../../shared/api';
import { ITask } from '../../../shared/types/Task';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    tasks: [] as Array<ITask>,
    currentTask : {} as ITask
};

type TInitialState = typeof initialState;

export const taskReducer = (state = initialState, action: TActionTasksReducer): TInitialState => {
    switch (action.type) {
        case 'SET_TASK':
            return { ...state, tasks: [...action.payload] };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'UPDATE_TASK': {
            const index = state.tasks.findIndex((elem) => {
                if (elem.id === action.payload.id) return true;
                return false;
            });
            let tempTasks = [...state.tasks];
            tempTasks[index] = action.payload;
            return { ...state, tasks: [...tempTasks] };
        }
        case 'SET_CURRENT_TASK' : {
            return {...state, currentTask : action.payload}
        }
        default:
            return state;
    }
};

type TActionTasksReducer = ActionTypesCreator<typeof actionTasks>;

export const actionTasks = {
    setTasks: (tasks: Array<ITask>) => ({ type: 'SET_TASK', payload: tasks } as const),
    addTask: (task: ITask) => ({ type: 'ADD_TASK', payload: task } as const),
    updateTask: (task: ITask) => ({ type: 'UPDATE_TASK', payload: task } as const),
    setCurrentTask : (task : ITask) => ({type : 'SET_CURRENT_TASK', payload : task} as const)
};

type TThunkTasksReducer = ThunkTypeCreator<TActionTasksReducer>;

export const fetchTasks = (id: string): TThunkTasksReducer => {
    return async (dispatch) => {
        if (!id) return;
        let data = await TaskAPI.getTasks(id);
        dispatch(actionTasks.setTasks(data));
    };
};

export const createTask = (
    name: string,
    description: string,
    callbackNavigate: (index: number) => void,
): TThunkTasksReducer => {
    return async (dispatch, getState) => {
        const id = getState().app.Tenatguid;

        //TODO : вынести создание
        let task: ITask = {
            name: name,
            description: description,
            comment: '',
            price: 0,
            taskTypeId: 0,
            statusId: getState().statuses.statuses[3].id,
            priorityId: getState().priorities.priorities[1].id,
            serviceId: 0,
            resolutionDatePlan: '2022-02-06T13:48:48.637Z',
            initiatorId: getState().users.users[1].id,
            executorId: getState().users.users[0].id,
            executorGroupId: 0,
        };

        let response = await TaskAPI.createTask(id, task);
        if (response.status === 200) {
            task.id = response.data;
            dispatch(actionTasks.addTask(task));
            callbackNavigate(getState().task.tasks.length - 1);
        }
    };
};

export const updateTask = (task: ITask): TThunkTasksReducer => {
    return async (dispatch, getState) => {
        const id = getState().app.Tenatguid;
        delete task.tags;
        let response = await TaskAPI.updateTask(id, task);
        if (response.status === 200) {
            dispatch(actionTasks.updateTask(task));
        }
    };
};

export const fetchCurrentTask = (id: string, taskId : string | undefined): TThunkTasksReducer => {
    return async (dispatch) => {
        if (!id || !taskId) return;
        let data = await TaskAPI.getTaskId(id, +taskId);
        dispatch(actionTasks.setCurrentTask(data));
    };
};
