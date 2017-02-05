'use strict';

var Promise = require('promise'),
  debug = require('debug')('apigee-cache-promise');

function init(apigee_cache) {
  return new apigee_cache_promise(apigee_cache);
}

function apigee_cache_promise(apigee_cache) {
  var apigee_cache = apigee_cache;
  this.getApigeeCache = function () {
    return apigee_cache;
  }
}

apigee_cache_promise.prototype.get = function (key) {
  var _apigee_cache_promise = this;
  return new Promise(function (resolve, reject) {
    _apigee_cache_promise.getApigeeCache().get(key, function (err, cached_data) {
      if (err) reject(err);
      else resolve(cached_data);
    });
  });
}

apigee_cache_promise.prototype.put = function (key, data, ttl) {
  var _apigee_cache_promise = this;
  return new Promise(function (resolve, reject) {
    _apigee_cache_promise.getApigeeCache().put(key, data, ttl, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

apigee_cache_promise.prototype.remove = function (key) {
  var _apigee_cache_promise = this;
  return new Promise(function (resolve, reject) {
    _apigee_cache_promise.getApigeeCache().remove(key, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = init;