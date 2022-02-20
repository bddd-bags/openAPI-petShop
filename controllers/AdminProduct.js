'use strict';

var utils = require('../utils/writer.js');
var AdminProduct = require('../service/AdminProductService');

module.exports.adminV1ProductsGET = function adminV1ProductsGET (req, res, next) {
  AdminProduct.adminV1ProductsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1ProductsPOST = function adminV1ProductsPOST (req, res, next, body) {
  AdminProduct.adminV1ProductsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1ProductsProductIdDELETE = function adminV1ProductsProductIdDELETE (req, res, next, productId) {
  AdminProduct.adminV1ProductsProductIdDELETE(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1ProductsProductIdGET = function adminV1ProductsProductIdGET (req, res, next, productId) {
  AdminProduct.adminV1ProductsProductIdGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1ProductsProductIdPUT = function adminV1ProductsProductIdPUT (req, res, next, body, productId) {
  AdminProduct.adminV1ProductsProductIdPUT(body, productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
