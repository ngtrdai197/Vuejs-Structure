import { authApi } from '../../@api/auth.api'

export const auth = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        // eslint-disable-next-line no-unused-vars
        async LOGIN({ commit }, login) {

            const result = await authApi.login(login)

            if (result) {
                window.localStorage.setItem('access_token', result.data['token'])
            }
        }
    }

}