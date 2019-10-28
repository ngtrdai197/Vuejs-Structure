import userApi from '../../@api/user.api'
import { GET_ALL_USERS, GET_USER } from '../actions'

export const user = {
    namespaced: true,
    state: {
        users: [],
        user: {}
    },
    getters: {
        [GET_ALL_USERS]: state => state.users,
        [GET_USER]: state => state.user,
    },
    mutations: {
        [GET_ALL_USERS]: (state, data) => {
            state.users = data
        },
        [GET_USER]: (state, data) => {
            state.user = data
        }
    },
    actions: {
        async [GET_ALL_USERS]({ commit }) {
            const result = await userApi.fetchAll()
            if (result) {
                commit(GET_ALL_USERS, result.data)
            }
        },
        async [GET_USER]({ commit }) {
            const result = await userApi.getByUsername('nguyendai')
            if (result) {
                commit(GET_USER, result.data)
            }
        }
    }

}