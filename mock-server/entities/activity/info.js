/**
 * Created by geyc on 2017/5/18.
 */
const info = {
    sumCount: 6, // 抽奖总次数
    remainCount: 1, // 抽奖剩余次数
    orderList: [{
            productName: '万惠金-季季润名字特长名字特长',
            orderAmount: 233,
            createTime: '2017/07/20'
        },
        {
            productName: '万惠金-季季润产品',
            orderAmount: 120,
            createTime: '2017/07/21'
        },
        {
            productName: '万惠金-季季润产品',
            orderAmount: 358,
            createTime: '2017/07/22'
        },
        {
            productName: '万惠金-季季润名字特长名字特长',
            orderAmount: 233,
            createTime: '2017/07/20'
        }
    ], // 投资记录
    drawDetail: [{
            title: '11111111111',
            type: 'outside',
            createTime: 1504511104000,
            actionType: 'copy',
            actionContent: '11111111111',
            iconUrl: '@image("92x92", "@color", "#999", "png", "Gift")',
            needAddress: true
        },
        {
            title: '22222222222',
            type: 'outside',
            createTime: 1504511104000,
            actionType: 'copy',
            actionContent: '22222222222',
            iconUrl: '@image("92x92", "@color", "#999", "png", "Gift")',
        }
    ], // 抽奖记录
    addressDetail: {
        userName: 'bobo',
        phone: '135****4095',
        address: '地址地址地址地址地址地址地址地址地址地址地址地址'
    }
};

module.exports = info;
