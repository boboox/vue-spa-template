var express = require('express');
var router = express.Router();
var common = require('./v1/common');
var user = require('./v1/user');

router.use('/', common);
router.use('/user', user);

module.exports = router;
