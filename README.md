apigee-cache-promise
====================
Wrapper of promisified version of Apigee Access Cache for get, put, and remove.
For thorough documentation about Apigee Access. Please check [Apigee-Access](https://www.npmjs.com/package/apigee-access).
### Usage

#### get

```javascript
var apigee = require('apigee-access'),
  cache = apigee.getCache(),
  apigee_cache_promise = require('apigee-cache-promise')(cache);

apigee_cache_promise.get('cache_key')
      .then(function(cached_value) {
        console.log(cached_value);
        return JSON.parse(cached_value);
      })
      .then(function(cached_value) {
        //do more stuff
      })
      .catch(function(e){
        console.log('something failed!');
      })
```

#### put

```javascript
apigee_cache_promise.put('cache_key', '{"test": "test_val"}', 300 // 5 minutes)
      .then(function() {
        console.log('Successfully stored in cache');
      })
      .then(function(cached_value) {
        //do more stuff
      })
      .catch(function(e) {
        console.log('something failed!');
      })
```

#### remove

```javascript
apigee_cache_promise.remove('cache_key')
      .then(function() {
        console.log('Successfully stored in cache');
      })
      .then(function(cached_value) {
        //do more stuff
      })
      .catch(function(e) {
        console.log('something failed!');
      })
```


### Contributing

If you would like to contribute, simply fork the repository, push your changes to a branch and send a pull request:

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Typo fixes, improvements to grammar or readability, it's all welcome.

### License

Copyright (c) 2017 Diego Zuluaga (twitter: @dzuluaga)
Licensed under the Apache license Version 2.0.