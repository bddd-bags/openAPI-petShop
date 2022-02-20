'use strict';


/**
 * Endpoint to delete address
 * Used by a user to delete an address
 *
 * addressId String get addressId
 * returns deleted
 **/
exports.v1UserAddressAddressIdDELETE = function(addressId) {
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
 * Used by users to view details of addresses that have been added
 *
 * body Addresses  (optional)
 * addressId String get addressId
 * authorization String member access
 * returns addresses
 **/
exports.v1UserAddressAddressIdPUT = function(body,addressId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "province" : "province",
  "user_id" : {
    "access_token" : "access_token",
    "refresh_token" : "refresh_token",
    "password" : "password",
    "user_id" : "user_id",
    "phone" : "phone",
    "role_id" : {
      "name" : "name",
      "id" : 6
    },
    "id" : 0,
    "email" : "email"
  },
  "phone" : "phone",
  "city" : "city",
  "name" : "name",
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
 * Used by the user to view all addresses that have been added
 *
 * authorization String member access
 * returns addresses
 **/
exports.v1UserAddressGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "province" : "province",
  "user_id" : {
    "access_token" : "access_token",
    "refresh_token" : "refresh_token",
    "password" : "password",
    "user_id" : "user_id",
    "phone" : "phone",
    "role_id" : {
      "name" : "name",
      "id" : 6
    },
    "id" : 0,
    "email" : "email"
  },
  "phone" : "phone",
  "city" : "city",
  "name" : "name",
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
 * Used by user to add address
 *
 * body Addresses 
 * authorization String member access
 * returns addresses
 **/
exports.v1UserAddressPOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "province" : "province",
  "user_id" : {
    "access_token" : "access_token",
    "refresh_token" : "refresh_token",
    "password" : "password",
    "user_id" : "user_id",
    "phone" : "phone",
    "role_id" : {
      "name" : "name",
      "id" : 6
    },
    "id" : 0,
    "email" : "email"
  },
  "phone" : "phone",
  "city" : "city",
  "name" : "name",
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

