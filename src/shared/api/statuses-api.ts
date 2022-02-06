import { instance } from './api';

export const StatusesAPI = {
    getPriorities: (id: string) => {
        return instance
            .get(`api/${id}/Statuses`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
    },
};
