import Vue from 'vue'
import VueRouter from 'vue-router'
import H from '../views/H'
import F from '../views/F'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/f',
            component: F
        },

        {
            path: '/h',
            component: H
        },
        {
            path: '/',
            //重定向
            redirect: '/h'
            
        }
    ]
})