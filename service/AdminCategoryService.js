'use strict';


/**
 * Endpoint for delete categories
 * Used by admin to delete an item categories
 *
 * categoryId String get categoryId
 * returns deleted
 **/
exports.adminV1CategoryCategoryIdDELETE = function(categoryId) {
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
 * Endpoint to update a categories
 * Used by admin to update categories
 *
 * body Categories Update a categories (optional)
 * categoryId String get categoryId
 * returns categories
 **/
exports.adminV1CategoryCategoryIdPUT = function(body,categoryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for get categories
 * Used by admin to view categories
 *
 * returns categories
 **/
exports.adminV1CategoryGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for add new categories
 * Used by admin to create new categories
 *
 * body Categories Create new category (optional)
 * returns categories
 **/
exports.adminV1CategoryPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

