import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://randomuser.me/api/0.4/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(instance => {
    return instance
}, error => {
    return error
});

instance.interceptors.response.use(response => {
    return response
}, error => {
    if (!error.response || !error.response.status || error.response.status === 502) {
        return '502'
    } else if (error.response.status === 500) {
        return '500';
    } else if (error.response && +error.response.status === 403) {
        return '403';
    } else if (error.response && +error.response.status === 401) {
        return 're login';
    }
    return Promise.reject(error.response)
});


export default instance;