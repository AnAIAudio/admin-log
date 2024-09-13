import axios from 'axios';
import qs from 'qs';

axios.defaults.paramsSerializer = function (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' });
};

function setHeaderAuthorization(token: string) {
    if (!token) return;
    axiosInstance.defaults.headers.common['Authorization'] = token;
}

const axiosInstance = axios.create({
    headers: {
        common: {
            Authorization: localStorage.getItem('token') || '',
        },
    },
});

export { setHeaderAuthorization };
export default axiosInstance;
