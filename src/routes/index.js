import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from './auth.routes'
import { dashboard } from './dashboard.routes'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        ...auth,
        ...dashboard,
        { path: '*', component: () => import('../pages/PageNotFound.vue') }
    ],
    mode: 'history'
})
