'use strict';


/**
 * Endpoint for get biodata
 * Used by the user to view the user's bio
 *
 * authorization String member access
 * returns profiles
 **/
exports.v1UserGET = function(authorization) {
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
 * Endpoint for update biodata
 * Used by the user to update the user's bio
 *
 * body Profiles  (optional)
 * authorization String member access
 * returns profiles
 **/
exports.v1UserPUT = function(body,authorization) {
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

