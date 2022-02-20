'use strict';


/**
 * Endpoint for check role admin
 * Used to check admin access rights
 *
 * xAccessToken String access_token
 * returns inline_response_200
 **/
exports.v1AuthCheck_rolePOST = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "message"
  },
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for register user
 * Used by users to register in order to access endpoints that require access rights
 *
 * returns profiles
 **/
exports.v1AuthRegisterPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

