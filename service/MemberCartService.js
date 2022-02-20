'use strict';


/**
 * Endpoint for delete product in carts
 * Used by the user to delete items in the cart
 *
 * authorization String member access
 * cartId String get cartId
 * returns deleted
 **/
exports.v1UserCartCartIdDELETE = function(authorization,cartId) {
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
 * Endpoint to edit qty product
 * Used by the user to edit qty order products
 *
 * body Shopping_carts Update qty product into cart (optional)
 * cartId String get cartId
 * authorization String member access
 * returns shopping_carts
 **/
exports.v1UserCartCartIdPUT = function(body,cartId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Endpoint for view carts
 * Used by the user to view items that have been added to the cart
 *
 * authorization String member access
 * returns shopping_carts
 **/
exports.v1UserCartGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Endpoint to add product into the cart
 * Used by user to add items to cart
 *
 * body Shopping_carts Add product into cart (optional)
 * authorization String member access
 * returns shopping_carts
 **/
exports.v1UserCartPOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

