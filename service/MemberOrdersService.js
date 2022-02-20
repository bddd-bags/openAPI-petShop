'use strict';


/**
 * Endpoint get all orders
 * Used by users to view all item transactions
 *
 * authorization String member access
 * returns order_products
 **/
exports.v1UserOrdersGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
  "sub_total" : "sub_total",
  "order_id" : {
    "snap_token" : "snap_token",
    "date" : "date",
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
    "shipping_cost" : "shipping_cost",
    "address_id" : {
      "address" : "address",
      "province" : "province",
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
      "phone" : "phone",
      "city" : "city",
      "name" : "name",
      "city_code" : "city_code",
      "id" : 0,
      "postal_code" : "postal_code",
      "province_code" : "province_code"
    },
    "grand_weight" : "grand_weight",
    "midtrans_id" : "midtrans_id",
    "id" : 0,
    "grand_total" : "grand_total",
    "status" : "status"
  },
  "sub_weight" : 1
}, {
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
  "sub_total" : "sub_total",
  "order_id" : {
    "snap_token" : "snap_token",
    "date" : "date",
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
    "shipping_cost" : "shipping_cost",
    "address_id" : {
      "address" : "address",
      "province" : "province",
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
      "phone" : "phone",
      "city" : "city",
      "name" : "name",
      "city_code" : "city_code",
      "id" : 0,
      "postal_code" : "postal_code",
      "province_code" : "province_code"
    },
    "grand_weight" : "grand_weight",
    "midtrans_id" : "midtrans_id",
    "id" : 0,
    "grand_total" : "grand_total",
    "status" : "status"
  },
  "sub_weight" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Endpoint get all user orders
 * Used by users to add orders
 *
 * body List Add new order (optional)
 * authorization String member access
 * returns order_products
 **/
exports.v1UserOrdersPOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
  "sub_total" : "sub_total",
  "order_id" : {
    "snap_token" : "snap_token",
    "date" : "date",
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
    "shipping_cost" : "shipping_cost",
    "address_id" : {
      "address" : "address",
      "province" : "province",
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
      "phone" : "phone",
      "city" : "city",
      "name" : "name",
      "city_code" : "city_code",
      "id" : 0,
      "postal_code" : "postal_code",
      "province_code" : "province_code"
    },
    "grand_weight" : "grand_weight",
    "midtrans_id" : "midtrans_id",
    "id" : 0,
    "grand_total" : "grand_total",
    "status" : "status"
  },
  "sub_weight" : 1
}, {
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
  "sub_total" : "sub_total",
  "order_id" : {
    "snap_token" : "snap_token",
    "date" : "date",
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
    "shipping_cost" : "shipping_cost",
    "address_id" : {
      "address" : "address",
      "province" : "province",
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
      "phone" : "phone",
      "city" : "city",
      "name" : "name",
      "city_code" : "city_code",
      "id" : 0,
      "postal_code" : "postal_code",
      "province_code" : "province_code"
    },
    "grand_weight" : "grand_weight",
    "midtrans_id" : "midtrans_id",
    "id" : 0,
    "grand_total" : "grand_total",
    "status" : "status"
  },
  "sub_weight" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

