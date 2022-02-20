'use strict';

var utils = require('../utils/writer.js');
var UsersActivity = require('../service/UsersActivityService');

module.exports.adoptsAdoptIdGET = function adoptsAdoptIdGET (req, res, next, adoptId) {
  UsersActivity.adoptsAdoptIdGET(adoptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adoptsGET = function adoptsGET (req, res, next, title, category) {
  UsersActivity.adoptsGET(title, category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesGET = function categoriesGET (req, res, next) {
  UsersActivity.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsGET = function productsGET (req, res, next, min_price, max_price, title, tags) {
  UsersActivity.productsGET(min_price, max_price, title, tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next, productId) {
  UsersActivity.productsProductIdGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tagsGET = function tagsGET (req, res, next) {
  UsersActivity.tagsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
