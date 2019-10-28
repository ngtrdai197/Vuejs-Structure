import { repo } from '.'
const resource = '/auth'

/* eslint-disable */
export const authApi = {
    fetchAll() {
        return repo.get(resource)
    },
    getByUsername(username) {
        return repo.get(`${resource}/query?keyword=${username}`)
    },
    login(user) {
        console.log(user);
        return repo.post(`${resource}/login`, user)
    }
}