import React from 'react';
import { PrioritiesAPI } from '../../../shared/api';
import { TPriority } from '../../../shared/types/Priority';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    priorities: [] as Array<TPriority>,
};

type TInitialState = typeof initialState;

export const prioritesReducer = (
    state = initialState,
    action: TPrioritiesReducer,
): TInitialState => {
    switch (action.type) {
        case 'SET_PRIORITIES':
            return { ...state, priorities: [...action.payload] };

        default:
            return state;
    }
};

type TPrioritiesReducer = ActionTypesCreator<typeof actionPriorities>;

export const actionPriorities = {
    setPriorities: (priorities: Array<TPriority>) =>
        ({ type: 'SET_PRIORITIES', payload: priorities } as const),
};

type TThunkAppReducer = ThunkTypeCreator<TPrioritiesReducer>;

export const fetchPriorities = (id: string): TThunkAppReducer => {
    return async (dispatch) => {
        if (!id) return;
        let data = await PrioritiesAPI.getPriorities(id);
        dispatch(actionPriorities.setPriorities(data));
    };
};
