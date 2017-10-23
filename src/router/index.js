import Vue from 'vue';
import Router from 'vue-router';
import serviceDemo from '@/pages/service-demo';
import vuexDemo from '@/pages/vuex-demo';
import filterDemo from '@/pages/filter-demo';
import keenUIDemo from '@/pages/keenui-demo';
import iconfontDemo from '@/pages/iconfont-demo';
Vue.use(Router);

export default new Router({
    routes: [
        // route
        {
            path: '/service',
            name: 'service',
            component: serviceDemo
        },
        {
            path: '/vuex',
            name: 'vuex',
            component: vuexDemo
        },
        {
            path: '/filter',
            name: 'filter',
            component: filterDemo
        },
        {
            path: '/keenui',
            name: 'keenui',
            component: keenUIDemo
        },
        {
            path: '/iconfont',
            name: 'iconfont',
            component: iconfontDemo
        }
    ]
});
