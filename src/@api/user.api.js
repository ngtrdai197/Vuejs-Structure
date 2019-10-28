import { repo } from '.';
const resource = '/user';

/* eslint-disable */
export default {
    fetchAll() {
        return repo.get(resource);
    },
    getByUsername(username) {
        return repo.get(`${resource}/query?keyword=${username}`)
    }
}