import { StatusesAPI } from '../../../shared/api';
import { TStatus } from '../../../shared/types/Status';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

let initialState = {
    statuses: [] as Array<TStatus>,
};

type TInitialState = typeof initialState;

export const statusesReducer = (
    state = initialState,
    action: TStatusesActionReducer,
): TInitialState => {
    switch (action.type) {
        case 'SET_STATUSES':
            return { ...state, statuses: [...action.payload] };

        default:
            return state;
    }
};

type TStatusesActionReducer = ActionTypesCreator<typeof actionStatuses>;

export const actionStatuses = {
    setStatuses: (statuses: Array<TStatus>) =>
        ({ type: 'SET_STATUSES', payload: statuses } as const),
};

type TThunkAppReducer = ThunkTypeCreator<TStatusesActionReducer>;

export const fetchStatuses = (id: string): TThunkAppReducer => {
    return async (dispatch) => {
        if (!id) return;
        let data = await StatusesAPI.getPriorities(id);
        dispatch(actionStatuses.setStatuses(data));
    };
};
