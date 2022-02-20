'use strict';

var utils = require('../utils/writer.js');
var AdminSupplies = require('../service/AdminSuppliesService');

module.exports.adminV1SuppliesGET = function adminV1SuppliesGET (req, res, next) {
  AdminSupplies.adminV1SuppliesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1SuppliesPOST = function adminV1SuppliesPOST (req, res, next, body) {
  AdminSupplies.adminV1SuppliesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1SuppliesSuppliesIdDELETE = function adminV1SuppliesSuppliesIdDELETE (req, res, next, suppliesId) {
  AdminSupplies.adminV1SuppliesSuppliesIdDELETE(suppliesId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1SuppliesSuppliesIdGET = function adminV1SuppliesSuppliesIdGET (req, res, next, suppliesId) {
  AdminSupplies.adminV1SuppliesSuppliesIdGET(suppliesId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1SuppliesSuppliesIdPUT = function adminV1SuppliesSuppliesIdPUT (req, res, next, body, suppliesId) {
  AdminSupplies.adminV1SuppliesSuppliesIdPUT(body, suppliesId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
