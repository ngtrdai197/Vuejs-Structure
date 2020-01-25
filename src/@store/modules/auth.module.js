import { authApi } from "../../@api/auth.api";
import { LOGIN, SET_TOKEN, GET_TOKEN } from "../actions/auth.action";

export const auth = {
  namespaced: true,
  state: {
    accessToken: ""
  },
  getters: {
    [GET_TOKEN]: state => state.accessToken
  },
  mutations: {
    [SET_TOKEN]: (state, data) => {
      state.accessToken = data;
    }
  },
  actions: {
    async [LOGIN]({ commit }, login) {
      const result = await authApi.login(login);
      if (result) {
        const token = result.data["accessToken"];
        commit(SET_TOKEN, token);
        window.localStorage.setItem("access_token", token);
      }
    }
  }
};
