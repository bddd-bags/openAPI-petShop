'use strict';

var utils = require('../utils/writer.js');
var MemberOrders = require('../service/MemberOrdersService');

module.exports.v1UserOrdersGET = function v1UserOrdersGET (req, res, next, authorization) {
  MemberOrders.v1UserOrdersGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserOrdersPOST = function v1UserOrdersPOST (req, res, next, body, authorization) {
  MemberOrders.v1UserOrdersPOST(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
