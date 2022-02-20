'use strict';

var utils = require('../utils/writer.js');
var AdminAddress = require('../service/AdminAddressService');

module.exports.adminV1AddressAddressIdDELETE = function adminV1AddressAddressIdDELETE (req, res, next, addressId) {
  AdminAddress.adminV1AddressAddressIdDELETE(addressId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AddressAddressIdPUT = function adminV1AddressAddressIdPUT (req, res, next, body, addressId) {
  AdminAddress.adminV1AddressAddressIdPUT(body, addressId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AddressGET = function adminV1AddressGET (req, res, next) {
  AdminAddress.adminV1AddressGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adminV1AddressPOST = function adminV1AddressPOST (req, res, next, body) {
  AdminAddress.adminV1AddressPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
