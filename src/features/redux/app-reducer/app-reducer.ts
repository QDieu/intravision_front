import React from 'react';
import { API } from '../../../shared/api';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    Tenatguid: '',
};

type TInitialState = typeof initialState;

export const appReducer = (state = initialState, action: TAppReducer): TInitialState => {
    switch (action.type) {
        case 'SET_TENATGUID':
            return { ...state, Tenatguid: action.payload };

        default:
            return state;
    }
};

type TAppReducer = ActionTypesCreator<typeof actionApp>;

export const actionApp = {
    setTenatdId: (id: string) => ({ type: 'SET_TENATGUID', payload: id } as const),
};

type TThunkAppReducer = ThunkTypeCreator<TAppReducer>;

export const fetchTenatdId = (): TThunkAppReducer => {
    return async (dispatch) => {
        let id = await API.getTenatsId();
        dispatch(actionApp.setTenatdId(id));
    };
};
