'use strict';

var utils = require('../utils/writer.js');
var AdminAdopt = require('../service/AdminAdoptService');

module.exports.adminV1AdoptAdoptIdDELETE = function adminV1AdoptAdoptIdDELETE (req, res, next, adoptId) {
  AdminAdopt.adminV1AdoptAdoptIdDELETE(adoptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AdoptAdoptIdGET = function adminV1AdoptAdoptIdGET (req, res, next, adoptId) {
  AdminAdopt.adminV1AdoptAdoptIdGET(adoptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AdoptAdoptIdPUT = function adminV1AdoptAdoptIdPUT (req, res, next, body, adoptId) {
  AdminAdopt.adminV1AdoptAdoptIdPUT(body, adoptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AdoptGET = function adminV1AdoptGET (req, res, next) {
  AdminAdopt.adminV1AdoptGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AdoptPOST = function adminV1AdoptPOST (req, res, next, body) {
  AdminAdopt.adminV1AdoptPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
