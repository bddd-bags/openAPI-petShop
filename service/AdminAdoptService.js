'use strict';


/**
 * Endpoint for delete animal adopt
 * Used by admins to remove adopted animalsUsed by admins to remove adopted animals
 *
 * adoptId String get adoptId
 * returns deleted
 **/
exports.adminV1AdoptAdoptIdDELETE = function(adoptId) {
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
 * Endpoint to get animal adopts by Id
 * Used by admin to view animal adoption by Id
 *
 * adoptId String get adoptId
 * returns animal_adoptions
 **/
exports.adminV1AdoptAdoptIdGET = function(adoptId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "img" : "img",
  "name" : "name",
  "id" : 0,
  "animal_race" : "animal_race",
  "age" : 6,
  "categoryId" : {
    "name" : "name",
    "id" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for update animal adopt
 * Used by admins to update adopted animals
 *
 * body Animal_adoptions update new adopt (optional)
 * adoptId String get adoptId
 * returns animal_adoptions
 **/
exports.adminV1AdoptAdoptIdPUT = function(body,adoptId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "img" : "img",
  "name" : "name",
  "id" : 0,
  "animal_race" : "animal_race",
  "age" : 6,
  "categoryId" : {
    "name" : "name",
    "id" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for get all adopt
 * Used by admins to see all adoptions that have been added
 *
 * returns animal_adoptions
 **/
exports.adminV1AdoptGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "img" : "img",
  "name" : "name",
  "id" : 0,
  "animal_race" : "animal_race",
  "age" : 6,
  "categoryId" : {
    "name" : "name",
    "id" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint for add new animal adopt
 * Used by admin to add new adoption
 *
 * body Animal_adoptions Add new product (optional)
 * returns animal_adoptions
 **/
exports.adminV1AdoptPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "img" : "img",
  "name" : "name",
  "id" : 0,
  "animal_race" : "animal_race",
  "age" : 6,
  "categoryId" : {
    "name" : "name",
    "id" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

