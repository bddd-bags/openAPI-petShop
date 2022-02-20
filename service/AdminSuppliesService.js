'use strict';


/**
 * Endpoint to get all supplies
 * Used by admin to view all supplies products
 *
 * returns supplies
 **/
exports.adminV1SuppliesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product_id" : {
    "sold" : 5,
    "img" : "img",
    "price" : "price",
    "qty" : 1,
    "name" : "name",
    "description" : "description",
    "weight" : "weight",
    "id" : 6
  },
  "qty" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint to add supplies product
 * Used by admin to add new supplies products
 *
 * body Supplies add new supplies (optional)
 * returns supplies
 **/
exports.adminV1SuppliesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product_id" : {
    "sold" : 5,
    "img" : "img",
    "price" : "price",
    "qty" : 1,
    "name" : "name",
    "description" : "description",
    "weight" : "weight",
    "id" : 6
  },
  "qty" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for delete supplies
 * Used by admin to delete an item supplies
 *
 * suppliesId String get suppliesId
 * returns deleted
 **/
exports.adminV1SuppliesSuppliesIdDELETE = function(suppliesId) {
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
 * Endpoint to get Supplies product by Id
 * Used by admin to view supplies product by Id
 *
 * suppliesId String get suppliesId
 * returns supplies
 **/
exports.adminV1SuppliesSuppliesIdGET = function(suppliesId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product_id" : {
    "sold" : 5,
    "img" : "img",
    "price" : "price",
    "qty" : 1,
    "name" : "name",
    "description" : "description",
    "weight" : "weight",
    "id" : 6
  },
  "qty" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint to edit supplies products
 * Used by admin to update supplies products
 *
 * body Supplies Update supplies (optional)
 * suppliesId String get suppliesId
 * returns supplies
 **/
exports.adminV1SuppliesSuppliesIdPUT = function(body,suppliesId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "product_id" : {
    "sold" : 5,
    "img" : "img",
    "price" : "price",
    "qty" : 1,
    "name" : "name",
    "description" : "description",
    "weight" : "weight",
    "id" : 6
  },
  "qty" : 6,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

