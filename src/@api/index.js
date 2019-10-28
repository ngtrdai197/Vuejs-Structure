import axios from 'axios'

export const repo = axios.create({
    baseURL: `http://localhost:3000/api`,
    headers: { 'Authorization': `Bearer ${window.localStorage.getItem('access_token')}` }
});
/* eslint-disable */

repo.interceptors.response.use(response => {
    return response
}, error => {
    if (!error.response) return; // check network
    const statusCode = error.response.status
    if (statusCode === 401 || statusCode === 403) {
        // handle is here or redirect to login page
        return
    }
});