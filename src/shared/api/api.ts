import axios from 'axios';

export const instance = axios.create({
    baseURL: `http://intravision-task.test01.intravision.ru/`,
});

export const API = {
    getTenatsId: () => {
        return instance
            .get('api/Tenants')
            .then((res) => res.data)
            .catch((err) => console.error(err));
    },
};
