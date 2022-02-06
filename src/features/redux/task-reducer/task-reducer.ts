import React from 'react';
import { TaskAPI } from '../../../shared/api';
import { ITask } from '../../../shared/types/Task';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    tasks: [] as Array<ITask>,
};

type TInitialState = typeof initialState;

export const taskReducer = (state = initialState, action: TActionTasksReducer): TInitialState => {
    switch (action.type) {
        case 'SET_TASK':
            return { ...state, tasks: [...action.payload] };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
};

type TActionTasksReducer = ActionTypesCreator<typeof actionTasks>;

export const actionTasks = {
    setTasks: (tasks: Array<ITask>) => ({ type: 'SET_TASK', payload: tasks } as const),
    addTask: (task: ITask) => ({ type: 'ADD_TASK', payload: task } as const),
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
    callbackNavigate: (task: ITask) => void,
): TThunkTasksReducer => {
    return async (dispatch, getState) => {
        const id = getState().app.Tenatguid;
        let task: ITask = {
            name: name,
            description: description,
            comment: '',
            price: 0,
            taskTypeId: 0,
            statusId: 0,
            priorityId: 0,
            serviceId: 0,
            resolutionDatePlan: '2022-02-06T13:48:48.637Z',
            initiatorId: 0,
            executorId: 0,
            executorGroupId: 0,
        };

        let response = await TaskAPI.createTask(id, task);
        if (response.status === 200) {
            task.id = response.data;
            dispatch(actionTasks.addTask(task));
            callbackNavigate(task);
        }
    };
};
