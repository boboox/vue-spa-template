var express = require('express');
var router = express.Router();
var base = require('./base');
router.use('/wealth', base);
var v1 = require('./v1');
router.use('/api/v1', v1);

module.exports = router;
