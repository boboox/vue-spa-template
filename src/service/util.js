import conf from '../config/config.js';

export const getUrl = (uri, {
    version = 'v1'
} = {}) => {
    uri = uri.indexOf('/') === 0 ? uri : '/' + uri;
    return conf.host + (conf.port ? (':' + conf.port) : '') + conf.apiBaseUrl + version + uri;
};

export const initRequest = (resource) => {
    return function (actionName, params) {
        if (!resource.hasOwnProperty(actionName) || typeof resource[actionName] !== 'function') {
            throw Error('找不到对应的接口' + actionName);
        }
        const action = resource[actionName];
        return action.call(resource, params).then(this.HandleSuccessCallback || null, this.HandleFailureCallback || null);
    };
};
