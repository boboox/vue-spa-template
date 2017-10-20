import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/logger/logger.js';
import userModule from './modules/user';
Vue.use(Vuex);

const state = {
    loading: false
};

const actions = {
    loading({
        commit
    }) {
        commit('LOADING');
    },
    loadingCompleted({
        commit
    }) {
        commit('LOADINGCOMPLETED');
    }
};
const getters = {
    loadingStatus(state) {
        return state.loading;
    }
};

const mutations = {
    LOADING(state) {
        state.loading = true;
    },
    LOADINGCOMPLETED(state) {
        state.loading = false;
    }
};

// 配置所有的state mutations 以及 modules
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        userModule
    },
    plugins: [createLogger()]
});
