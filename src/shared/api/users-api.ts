import { instance } from './api';

export const UsersAPI = {
    getUsers: (id: string) => {
        return instance
            .get(`api/${id}/Users`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
    },
};
