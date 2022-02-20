'use strict';


/**
 * Endpoint for get products
 * Used by admins to see all products that have been added
 *
 * returns product_tags
 **/
exports.adminV1ProductsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "tag_id" : {
    "name" : "name",
    "id" : 6
  },
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
 * Endpoint for add new products
 * Used by admin to add an item
 *
 * body Products Add new product (optional)
 * returns product_tags
 **/
exports.adminV1ProductsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "tag_id" : {
    "name" : "name",
    "id" : 6
  },
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
 * Endpoint for delete product
 * Used by admin to delete an item
 *
 * productId String get productId
 * returns deleted
 **/
exports.adminV1ProductsProductIdDELETE = function(productId) {
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
 * Endpoint to get Products by Id
 * Used by admin to view a products by Id product
 *
 * productId String get productId
 * returns product_tags
 **/
exports.adminV1ProductsProductIdGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "tag_id" : {
    "name" : "name",
    "id" : 6
  },
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
 * Endpoint for update product
 * Used by admin to update an item
 *
 * body Products update new product (optional)
 * productId String get productId
 * returns product_tags
 **/
exports.adminV1ProductsProductIdPUT = function(body,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "tag_id" : {
    "name" : "name",
    "id" : 6
  },
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

