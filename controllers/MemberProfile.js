'use strict';

var utils = require('../utils/writer.js');
var MemberProfile = require('../service/MemberProfileService');

module.exports.v1UserGET = function v1UserGET (req, res, next, authorization) {
  MemberProfile.v1UserGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserPUT = function v1UserPUT (req, res, next, body, authorization) {
  MemberProfile.v1UserPUT(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
