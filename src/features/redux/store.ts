import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

const RootReducer = combineReducers({});

type TRootReducer = typeof RootReducer;
export type TAppState = ReturnType<TRootReducer>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypesCreator<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
    PropertiesTypes<T>
>;

export type ThunkTypeCreator<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    TAppState,
    unknown,
    A
>;

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

export default store;
