import UserService from '../../service/user';

const state = {
    userInfo: {}
};

const getters = {
    userInfo: state => state.userInfo
};

const actions = {
    getUserInfo({
        commit
    }, params) {
        return new UserService(commit).getUserInfo(params).then(responseData => {
            commit('GET_USERINFO', responseData);
            return responseData;
        });
    }
};

// mutations
const mutations = {
    'GET_USERINFO' (state, {
        userInfo
    }) {
        state.userInfo = userInfo;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
