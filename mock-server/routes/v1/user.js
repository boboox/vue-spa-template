 var express = require('express');
 var apiUser = express.Router();

 apiUser.get('/info', function (request, response, next) {
     var responseData = {};

     responseData = {
         userInfo: 'test'
     };
     setTimeout(function () {
         response.end(JSON.stringify(responseData));
     }, 2000);
 });

 module.exports = apiUser;
