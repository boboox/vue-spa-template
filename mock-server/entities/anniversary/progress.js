const gift = {
    id: '@integer(0,1000)',
    level: 50000,
    name: '@cname()',
    iconUrl: '@image("92x92", "@color", "#999", "png", "Gift")',
    needAddress: '@Boolean()',
    userName: '@cname()',
    phone: '13584881460',
    address: '@county(true)',
    investAmount: 60000
};

module.exports = gift;
