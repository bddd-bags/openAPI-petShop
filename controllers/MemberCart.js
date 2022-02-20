'use strict';

var utils = require('../utils/writer.js');
var MemberCart = require('../service/MemberCartService');

module.exports.v1UserCartCartIdDELETE = function v1UserCartCartIdDELETE (req, res, next, authorization, cartId) {
  MemberCart.v1UserCartCartIdDELETE(authorization, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserCartCartIdPUT = function v1UserCartCartIdPUT (req, res, next, body, cartId, authorization) {
  MemberCart.v1UserCartCartIdPUT(body, cartId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserCartGET = function v1UserCartGET (req, res, next, authorization) {
  MemberCart.v1UserCartGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserCartPOST = function v1UserCartPOST (req, res, next, body, authorization) {
  MemberCart.v1UserCartPOST(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
