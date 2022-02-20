'use strict';

var utils = require('../utils/writer.js');
var AdminProfile = require('../service/AdminProfileService');

module.exports.adminV1GET = function adminV1GET (req, res, next) {
  AdminProfile.adminV1GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1PUT = function adminV1PUT (req, res, next, body) {
  AdminProfile.adminV1PUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
