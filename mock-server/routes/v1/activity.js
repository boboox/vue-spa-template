/**
 * Created by geyc on 2017/5/18.
 */
var entities = require('../../entities');
var express = require('express');
var apiActivity = express.Router();
var Mock = require('mockjs');
var getResponse = require('../../libs/response.js');
var contentType = {
    'Content-Type': 'application/json;charset=utf-8'
};
var utils = require('utility');

// 获取用户活动信息
apiActivity.get('/info', function (request, response, next) {
    var data = Mock.mock({
        'activityInfo': entities.info
    });
    response.writeHead(400, contentType);

    var responseData = data.activityInfo;
    responseData = getResponse(null, 5001, '未登录');
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 获取用户活动信息
apiActivity.get('/outer/info', function (request, response, next) {
    var reqData = request.query;
    var data = Mock.mock({
        'activityInfo': entities.info
    });
    var responseData = {};
    var md5Result = VerifyBindInfo(reqData.bindInfo);
    if (md5Result) {
        response.writeHead(200, contentType);
        responseData = data.activityInfo;
    } else {
        responseData = getResponse(null, 2001, '验证失败');
    };

    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 获取用户活动信息
apiActivity.get('/draw', function (request, response, next) {

    var data = Mock.mock({
        'drawInfo': entities.draw
    });
    // response.writeHead(400, contentType);
    var responseData = data.drawInfo;
    // responseData = getResponse(null, 2040, '很遗憾没有中奖');
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 获取用户活动信息
apiActivity.post('/outer/draw', function (request, response, next) {
    var reqData = request.body;
    var data = Mock.mock({
        'drawInfo': entities.draw
    });

    var responseData = {};
    var md5Result = VerifyBindInfo(reqData.bindInfo);
    // response.writeHead(400, contentType);
    // responseData = getResponse(null, 2040, '很遗憾没有中奖');
    if (md5Result) {
        response.writeHead(200, contentType);
        responseData = data.drawInfo;
    } else {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '验证失败');
    };

    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 获取活动信息
apiActivity.get('/config', function (request, response, next) {
    var data = Mock.mock({
        'configInfo': entities.config
    });

    var responseData = data.configInfo;
    response.end(JSON.stringify(responseData));
});

// 验证抽奖 (618 引流活动)
apiActivity.post('/verifiedDraw', function (request, response, next) {
    var data = Mock.mock({
        'drawResult': entities.drawResult
    });

    var reqData = request.body;
    var responseData = data.drawResult;
    if (reqData.verifyCode === '200') {
        // status 200:领取成功
        setTimeout(function () {
            response.end(JSON.stringify(responseData));
        }, 2000);
        // response.end(JSON.stringify(responseData));
    } else {
        // status 400:领取失败
        response.writeHead(400, contentType);

        if (reqData.verifyCode === '2040') {
            // 2040:很遗憾没有中奖
            responseData = getResponse(null, 2040, '很遗憾没有中奖');
        } else if (reqData.verifyCode === '2041') {
            // 2041:已领过
            responseData = getResponse(null, 2041, '已领过');
        } else if (reqData.verifyCode === '2042') {
            // 2042:活动已经结束
            responseData = getResponse(null, 2042, '活动已经结束');
        } else if (reqData.verifyCode === '2043') {
            // 2043:奖品已发完
            responseData = getResponse(null, 2043, '奖品已发完');
        } else {
            responseData = getResponse(null, 1, '其他异常');
        }
    }
    VerifyBindInfo(reqData.bindInfo);
    response.end(JSON.stringify(responseData));
});

apiActivity.get('/gifts', function (request, response, next) {
    var data = Mock.mock({
        'gift|5': [entities.gift]
    });
    response.writeHead(200, contentType);

    data.gift.forEach(function (item, index) {
        item.level = item.level * Math.ceil((index + 1) / 2);
    });
    var responseData = (data.gift);
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});
// 是否绑定外部关系
apiActivity.get('/outer/bind', function (request, response, next) {
    var reqData = request.query;
    var responseData = {
        displayName: '135****0992'
    };
    if (!reqData.activityNo) {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '活动编号没输入');
        response.end(JSON.stringify(responseData));
        return false;
    }
    var md5Result = VerifyBindInfo(reqData.bindInfo);
    if (md5Result) {
        response.writeHead(200, contentType);
    } else {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '验证失败');
    };

    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 绑定外部关系
apiActivity.post('/userAddress', function (request, response, next) {
    var reqData = request.body;
    var responseData = {};
    if (!reqData.phone) {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '手机号没输入');
        response.end(JSON.stringify(responseData));
    }
    if (!reqData.activityNo) {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '活动编号没输入');
        response.end(JSON.stringify(responseData));
    }
    var md5Result = VerifyBindInfo(reqData.bindInfo);
    if (md5Result) {
        response.writeHead(200, contentType);
    } else {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '绑定信息验证失败');
    };

    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

apiActivity.post('/outer/bind', function (request, response, next) {
    var reqData = request.body;
    var responseData = {
        displayName: '135****0992'
    };
    if (!reqData.mobile) {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '手机号没输入');
        response.end(JSON.stringify(responseData));
    }
    if (!reqData.activityNo) {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '活动编号没输入');
        response.end(JSON.stringify(responseData));
    }
    var md5Result = VerifyBindInfo(reqData.bindInfo);
    if (md5Result) {
        response.writeHead(200, contentType);
    } else {
        response.writeHead(400, contentType);
        responseData = getResponse(null, 2001, '绑定信息验证失败');
    };

    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

apiActivity.get('/sign', function (request, response, next) {
    var reqData = request.query;
    var responseData = {};
    var md5Result = getSign(reqData.bindInfo);
    console.log(md5Result);
    response.writeHead(200, contentType);
    responseData = {
        sign: md5Result
    };
    response.end(JSON.stringify(responseData));
});

function VerifyBindInfo(bindInfoStr) {
    if (bindInfoStr) {
        var bindInfo = JSON.parse(bindInfoStr);
        if (bindInfo) {
            var md5Str = 'Wanda' + bindInfo.userId + '\n' + bindInfo.level + '\n' + bindInfo.reach + '\n';
            console.log('外部平台验证串:\n' + md5Str);
            var md5result = utils.md5(md5Str);
            console.log('外部平台验证串md5:' + md5result);
            console.log('外部平台提供的md5:' + bindInfo.sign);
            return bindInfo.sign === md5result;
            // md5验证
        }
    } else {
        console.log('验证字符串错误');
        return false;
    }
};

function getSign(bindInfoStr) {
    if (bindInfoStr) {
        var bindInfo = JSON.parse(bindInfoStr);
        if (bindInfo) {
            var md5Str = 'Wanda' + bindInfo.userId + '\n' + bindInfo.level + '\n' + bindInfo.reach + '\n';
            var md5result = utils.md5(md5Str);
            return md5result;
        }
    } else {
        console.log('验证字符串错误');
        return false;
    }
};

module.exports = apiActivity;
