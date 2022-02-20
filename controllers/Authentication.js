'use strict';

var utils = require('../utils/writer.js');
var Authentication = require('../service/AuthenticationService');

module.exports.v1AuthCheck_rolePOST = function v1AuthCheck_rolePOST (req, res, next, xAccessToken) {
  Authentication.v1AuthCheck_rolePOST(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthRegisterPOST = function v1AuthRegisterPOST (req, res, next) {
  Authentication.v1AuthRegisterPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
