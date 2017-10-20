// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import filters from './utils/filters/index.js';
import linkDirective from './utils/directives/link';

Vue.config.productionTip = false;
Vue.config.debug = true;

// 注册过滤器
filters.forEach(({
    name,
    definition
}) => {
    Vue.filter(name, definition);
});

// 注册指令
const {
    name,
    hooks
} = linkDirective;

Vue.directive(name, hooks);
/* eslint-disable no-new */
const app = new Vue({
    ...App,
    router,
    store
});

app.$mount('#app');
