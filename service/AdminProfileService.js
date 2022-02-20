'use strict';


/**
 * Endpoint for get biodata by Id
 * Used by admin to view biodata
 *
 * returns profiles
 **/
exports.adminV1GET = function() {
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


/**
 * Endpoint for edit biodata
 * Used by admin to update biodata
 *
 * body Profiles  (optional)
 * returns profiles
 **/
exports.adminV1PUT = function(body) {
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

