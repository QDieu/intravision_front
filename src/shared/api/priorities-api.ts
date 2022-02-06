import { instance } from './api';

export const PrioritiesAPI = {
    getPriorities: (id: string) => {
        return instance
            .get(`api/${id}/Priorities`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
    },
};
