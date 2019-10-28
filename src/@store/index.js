import Vue from 'vue'
import VueX from 'vuex'

import { auth, user } from './modules'

Vue.use(VueX);

export const store = new VueX.Store({
    modules: {
        AuthModule: auth,
        UserModule: user
    }
})