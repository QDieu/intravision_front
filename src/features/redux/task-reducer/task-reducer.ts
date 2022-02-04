import React from 'react';
import { ITask } from '../../../shared/types/Task';

let initialState = {
    tasks : [] as Array<ITask>
}

type TInitialState = typeof initialState;

export const taskReducer = (state = initialState, action : any) : TInitialState => {
    switch (action.type)
}