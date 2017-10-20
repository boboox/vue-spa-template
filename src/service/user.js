import Vue from 'vue';
import VueResource from 'vue-resource';
import BaseService from './base';
import {
    getUrl,
    initRequest
} from './util';
Vue.use(VueResource);

const actions = {
    getUserInfo: {
        method: 'GET',
        url: getUrl('user/info')
    }
};

const resource = Vue.resource('/', {}, actions);
var request = initRequest(resource);

class UserService extends BaseService {
    getUserInfo = (params) => {
        return request.call(this, 'getUserInfo', params);
    }
}

export default UserService;
