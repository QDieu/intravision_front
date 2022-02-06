import { ITask } from '../types/Task';
import { instance } from './api';

export const TaskAPI = {
    getTasks: (id: string) => {
        return instance
            .get('odata/tasks', {
                params: {
                    tenantguid: id,
                },
            })
            .then((response) => response.data.value)
            .catch((err) => console.error(err));
    },
    createTask: (id: string, task: ITask) => {
        return instance.post(`api/${id}/Tasks`, {
            body: {},
        });
    },
};
