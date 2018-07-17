import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import UserInfo from '../pages/userinfo/UserInfo.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopSelect from '../pages/Shop/ShopSelect/ShopSelect.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopEvaluate from '../pages/Shop/ShopEvaluate/ShopEvaluate.vue'


export default new VueRouter({
    routes: [
        
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/userinfo',
            component: UserInfo,
        },
        {
            path: '/shop',
            component: Shop,
            children:[
                {
                    path: '/shop/slelect',
                    component: ShopSelect,
                },
                {
                    path: '/shop/info',
                    component: ShopInfo,
                },
                {
                    path: '/shop/evaluate',
                    component: ShopEvaluate,
                },
                {
                    path: '',
                    redirect: '/shop/slelect'
                },
            ],
        }

    ]
});