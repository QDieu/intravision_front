import { createStore, combineReducers, applyMiddleware, Action, compose } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { appReducer } from './app-reducer';
import { prioritesReducer } from './priorities-reducer';
import { statusesReducer } from './status-reducer';
import { taskReducer } from './task-reducer';
import { usersReducer } from './users-reducer';

const RootReducer = combineReducers({
    task: taskReducer,
    app: appReducer,
    priorities: prioritesReducer,
    statuses: statusesReducer,
    users: usersReducer,
});

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

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
