// activity页面
var info = require('./activity/info.js');
var draw = require('./activity/draw.js');
var config = require('./activity/config.js');
var drawResult = require('./activity/verified-draw.js');
// common
var verifyCode = require('./common/verify-code');
var sharePromotion = require('./common/share-promotion');

// anniversary
var userinfo = require('./anniversary/userinfo');
var gift = require('./anniversary/gift');
var progress = require('./anniversary/progress');
module.exports = {
    verifyCode,
    info,
    draw,
    config,
    drawResult,
    sharePromotion,
    userinfo,
    gift,
    progress
};
