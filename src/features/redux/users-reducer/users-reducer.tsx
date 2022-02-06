import React from 'react';
import { API } from '../../../shared/api';
import { UsersAPI } from '../../../shared/api/users-api';
import { TUser } from '../../../shared/types/User';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    users: [] as Array<TUser>,
};

type TInitialState = typeof initialState;

export const usersReducer = (state = initialState, action: TUsersReducer): TInitialState => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: [...action.payload] };

        default:
            return state;
    }
};

type TUsersReducer = ActionTypesCreator<typeof actionApp>;

export const actionApp = {
    setUsers: (users: Array<TUser>) => ({ type: 'SET_USERS', payload: users } as const),
};

type TThunkUserReducer = ThunkTypeCreator<TUsersReducer>;

export const fetchUser = (id: string): TThunkUserReducer => {
    return async (dispatch) => {
        let data = await UsersAPI.getPriorities(id);
        dispatch(actionApp.setUsers(data));
    };
};
