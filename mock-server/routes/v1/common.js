/**
 * Created by geyc on 2017/5/18.
 */
var entities = require('../../entities');
var express = require('express');
var apiCommon = express.Router();
var Mock = require('mockjs');


var getListResponse = require('../../libs/list-response.js');
var getResponse = require('../../libs/response.js');

var status_code_success = 200;
var content_type = { 'Content-Type': 'application/json;charset=utf-8' };

// 获取用户活动信息
apiCommon.get('/verifyCode', function(request, response, next) {
    var data = Mock.mock({
        'verifyCode': entities.verifyCode
    });
    //response.writeHead(400, content_type);
    var responseData = data.verifyCode;
    //var responseData = getResponse(null, 1007, '手机号已注册');
    setTimeout(function() {
        response.end(JSON.stringify(responseData));
    }, 2000);
});

apiCommon.get('/sharePromotion', function(request, response, next) {
    var data = Mock.mock({
        'sharePromotion': entities.sharePromotion
    });
    var responseData = data.sharePromotion;
    setTimeout(function() {
        response.end(JSON.stringify(responseData));
    }, 6000);
});

apiCommon.post('/register', function(request, response, next) {
    var data = {
        accessToken: '1HLJDKFH123L1J2HKJ5LH1L2JKH3'
    };
    var responseData = data;
    setTimeout(function() {
        response.end(JSON.stringify(responseData));
    }, 2000);
});
apiCommon.post('/login', function(request, response, next) {
    var data = {
        accessToken: '1HLJDKFH123L1J2HKJ5LH1L2JKH3'
    };
    var responseData = data;
    setTimeout(function() {
        response.end(JSON.stringify(responseData));
    }, 2000);
});
module.exports = apiCommon;
