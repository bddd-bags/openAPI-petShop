'use strict';

var utils = require('../utils/writer.js');
var MemberAddress = require('../service/MemberAddressService');

module.exports.v1UserAddressAddressIdDELETE = function v1UserAddressAddressIdDELETE (req, res, next, addressId) {
  MemberAddress.v1UserAddressAddressIdDELETE(addressId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserAddressAddressIdPUT = function v1UserAddressAddressIdPUT (req, res, next, body, addressId, authorization) {
  MemberAddress.v1UserAddressAddressIdPUT(body, addressId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserAddressGET = function v1UserAddressGET (req, res, next, authorization) {
  MemberAddress.v1UserAddressGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UserAddressPOST = function v1UserAddressPOST (req, res, next, body, authorization) {
  MemberAddress.v1UserAddressPOST(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
