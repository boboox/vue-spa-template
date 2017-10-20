class BaseService {
    constructor(commit) {
        this.commit = commit;
    }
    HandleSuccessCallback = (response) => {
        if (response.ok) {
            // resource 在使用interceptor的时候.对repsonse的改变不会影响到json()(Promise)
            const responseType = typeof response.body;
            if (responseType === 'string' && response.body.length === 0) {
                return response.text();
            } else if (responseType === 'object' && response.body.size === 0) {
                return Promise.resolve({});
            } else {
                return response.json();
            }
        }
    }
    HandleFailureCallback = (response) => {
        if (response.status === 400) {
            return responseErrorHandle(response);
        }
        if (response.status === 401) {
            return Promise.reject({
                errorCode: 401,
                errorMessage: '未授权的请求'
            });
        }
        if (response.status === 404) {
            return Promise.reject({
                errorCode: 404,
                errorMessage: '接口请求发生404错误,url:' + response.url
            });
        }
        if (response.status === 408) {
            return Promise.reject({
                errorCode: 408,
                errorMessage: '服务器超时'
            });
        }
        if (response.status >= 500 && response.status < 600) {
            return Promise.reject({
                errorCode: 500,
                errorMessage: '服务器发生错误'
            });
        }
        if (response.status === -1 || response.status === 0) {
            if (window.$Wui) {
                window.$Wui.Dialog.show({
                    content: '当前网络异常,请稍后再试',
                    buttons: [{
                        text: '我知道了'
                    }]
                });
            } else {
                console.log('缺少对话框组件');
            }
            return Promise.reject({
                errorCode: -1,
                errorMessage: '无网络连接'
            });
        }
    }
}

function responseErrorHandle(response) {
    let responseObj = response.body;
    responseObj = typeof responseObj === 'string' ? JSON.parse(responseObj) : responseObj;
    if (responseObj && responseObj.errorCode) {
        return Promise.reject(responseObj);
    } else {
        window.Wui && window.Wui.Toast.show(responseObj.errorMessage);
        return Promise.reject(responseObj);
    }
}

export default BaseService;
