var entities = require('../../entities');
var express = require('express');
var apiAnnisersary = express.Router();
var Mock = require('mockjs');

var getResponse = require('../../libs/response.js');
var statusCodeSuccess = 200;
var contentType = {
    'Content-Type': 'application/json;charset=utf-8'
};

// Mock.setup({
//   timeout: '200-600' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
// });

// 获取用户活动信息
apiAnnisersary.get('/2017/userinfo', function (request, response, next) {
    var data = Mock.mock({
        'userinfo': entities.userinfo
    });
    response.writeHead(statusCodeSuccess, contentType);

    var responseData = (data.userinfo);
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

// 获取用户活动信息
apiAnnisersary.get('/2017/gifts', function (request, response, next) {
    var data = Mock.mock({
        'gift|8': [entities.gift]
    });
    response.writeHead(statusCodeSuccess, contentType);

    data.gift.forEach(function (item, index) {
        item.level = item.level * Math.ceil((index + 1) / 2);
    });
    var responseData = (data.gift);
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});
// 提交用户选择
apiAnnisersary.post('/2017/myGifts', function (request, response, next) {
    setTimeout(function () {
        response.end(JSON.stringify({}));
    }, 2000);
});
// 查询用户活动进度
apiAnnisersary.get('/2017/progress', function (request, response, next) {
    var data = Mock.mock({
        'progress': entities.progress
    });
    response.writeHead(statusCodeSuccess, contentType);

    var responseData = (data.progress);
    setTimeout(function () {
        response.end(JSON.stringify(responseData));
    }, 2000);
});
module.exports = apiAnnisersary;
