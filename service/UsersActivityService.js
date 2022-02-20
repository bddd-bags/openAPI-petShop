'use strict';


/**
 * Endpoint to get animal adopt by Id
 * Used by all users to view details of a Used by all users to view details of an adopted animal
 *
 * adoptId String get adoptId
 * returns inline_response_200_2
 **/
exports.adoptsAdoptIdGET = function(adoptId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "img" : "img",
    "name" : "name",
    "id" : 0,
    "animal_race" : "animal_race",
    "age" : 6,
    "categoryId" : {
      "name" : "name",
      "id" : 1
    }
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
 * Endpoint for get all animal adopt
 * Used by all users to view all adopted animal
 *
 * title String title filters (optional)
 * category String category filters (optional)
 * returns inline_response_200_2
 **/
exports.adoptsGET = function(title,category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "img" : "img",
    "name" : "name",
    "id" : 0,
    "animal_race" : "animal_race",
    "age" : 6,
    "categoryId" : {
      "name" : "name",
      "id" : 1
    }
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
 * Endpoint to view categories
 * Used by all users to view details of a Used by all users to view a categories
 *
 * returns categories
 **/
exports.categoriesGET = function() {
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
 * Endpoint for get all products
 * Used by all users to view products
 *
 * min_price String price filters (optional)
 * max_price String price filters (optional)
 * title String title filters (optional)
 * tags String tags filters (optional)
 * returns product_tags
 **/
exports.productsGET = function(min_price,max_price,title,tags) {
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
 * Endpoint to get product by Id
 * Used by all users to view details of a product
 *
 * productId String get productId
 * returns inline_response_200_1
 **/
exports.productsProductIdGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : { },
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
 * Endpoint to view tags
 * Used by all users to view details of a Used by all users to view a tags
 *
 * returns tags
 **/
exports.tagsGET = function() {
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

