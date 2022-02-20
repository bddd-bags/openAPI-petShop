'use strict';


/**
 * Endpoint for get tags
 * Used by admin to view tags
 *
 * returns tags
 **/
exports.adminV1TagsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for add new tags
 * Used by admin to create new tags
 *
 * body Tags Create new tags (optional)
 * returns tags
 **/
exports.adminV1TagsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for delete tags
 * Used by admin to delete an item tags
 *
 * tagsId String get tagsId
 * returns deleted
 **/
exports.adminV1TagsTagsIdDELETE = function(tagsId) {
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

