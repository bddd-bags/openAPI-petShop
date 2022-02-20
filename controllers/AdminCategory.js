'use strict';

var utils = require('../utils/writer.js');
var AdminCategory = require('../service/AdminCategoryService');

module.exports.adminV1CategoryCategoryIdDELETE = function adminV1CategoryCategoryIdDELETE (req, res, next, categoryId) {
  AdminCategory.adminV1CategoryCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1CategoryCategoryIdPUT = function adminV1CategoryCategoryIdPUT (req, res, next, body, categoryId) {
  AdminCategory.adminV1CategoryCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1CategoryGET = function adminV1CategoryGET (req, res, next) {
  AdminCategory.adminV1CategoryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1CategoryPOST = function adminV1CategoryPOST (req, res, next, body) {
  AdminCategory.adminV1CategoryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
