'use strict';


/**
 * Endpoint to delete address
 * Used by admin to delete an address
 *
 * addressId String get addressId
 * returns deleted
 **/
exports.adminV1AddressAddressIdDELETE = function(addressId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "SUCCESS_DELETED!"
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for updated address
 * Used by admins to update an address
 *
 * body About  (optional)
 * addressId String get addressId
 * returns about
 **/
exports.adminV1AddressAddressIdPUT = function(body,addressId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "province" : "province",
  "city" : "city",
  "name" : "name",
  "description" : "description",
  "city_code" : "city_code",
  "id" : 0,
  "postal_code" : "postal_code",
  "province_code" : "province_code"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint to view addresses
 * Used by admin to see all addresses that have been added
 *
 * returns about
 **/
exports.adminV1AddressGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "province" : "province",
  "city" : "city",
  "name" : "name",
  "description" : "description",
  "city_code" : "city_code",
  "id" : 0,
  "postal_code" : "postal_code",
  "province_code" : "province_code"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for add address
 * Used by admin to add an address
 *
 * body About 
 * returns about
 **/
exports.adminV1AddressPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "province" : "province",
  "city" : "city",
  "name" : "name",
  "description" : "description",
  "city_code" : "city_code",
  "id" : 0,
  "postal_code" : "postal_code",
  "province_code" : "province_code"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

