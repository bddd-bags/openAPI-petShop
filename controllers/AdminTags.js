'use strict';

var utils = require('../utils/writer.js');
var AdminTags = require('../service/AdminTagsService');

module.exports.adminV1TagsGET = function adminV1TagsGET (req, res, next) {
  AdminTags.adminV1TagsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1TagsPOST = function adminV1TagsPOST (req, res, next, body) {
  AdminTags.adminV1TagsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1TagsTagsIdDELETE = function adminV1TagsTagsIdDELETE (req, res, next, tagsId) {
  AdminTags.adminV1TagsTagsIdDELETE(tagsId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
