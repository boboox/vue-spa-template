const sharePromotion = {
    url: '', // 分享url
    qrCode: '', // 二维码base64 带头
    iconData: 'aaa', // 分享icon base64 不带头
    shareMap: {
        wechat: {
            typeName: null,
            description: '哦~~么么哒....',
            title: '么么哒',
            type: 'wechat'
        },
        friends: {
            typeName: null,
            description: '朋友圈分享描述文案....',
            title: '么么哒',
            type: 'friends'
        }
    },
    sharePageTitle: '么么哒',
    landingPageTitle: '么么哒',
    themeData: {
        mainImageUrl: '@image("750x520", "@color", "#999", "png", "17fe.cn")', // 主视觉图
        mainFontColor: '@color', // 主色
        backgroundColorStart: '@color', // 背景色起始
        backgroundColorEnd: '@color', // 背景色结束
        sloganImageUrl: '@image("292x116", "@color", "#999", "png", "17fe.cn")', //
        buttonColor: '@color', // 按钮色
        buttonFontColor: '@color' // 按钮文字色
    },
    'ruleInfo|4': ['@cparagraph()'],
    'shareText': '张先生',
    'registerDisclaimer': 'http://10.213.57.211/wealth/register_disclaimer'
};
module.exports = sharePromotion;