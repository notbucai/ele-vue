import Vue from 'vue'
import VueRouter from 'vue-router'
import H from '../views/H'
import F from '../views/F'
import News from '../views/News'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/f',
            component: F
        },

        {
            path: '/h',
            component: H,
            children: [
                {
                    path: 'news/:id',
                    component: News
                }
            ]
        },
        {
            path: '/',
            //重定向
            redirect: '/h'

        }
    ]
})