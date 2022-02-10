import { ActionTypesCreator } from '../store';

let initialState = {
    Tenatguid: '0801fb85-51ab-42c9-ab84-d2557671917e',
};

type TInitialState = typeof initialState;

export const appReducer = (state = initialState, action: TAppReducer): TInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

type TAppReducer = ActionTypesCreator<typeof actionApp>;

export const actionApp = {
    
};

