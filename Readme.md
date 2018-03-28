# easy-promise-all
This is a easy implementation of object Promises. With **easy-promise-all** we can use key-value pair to get result returned by promise.
**easy-promise-all** uses vanilla java script.

**Installation**

```$ npm install easy-promise-all```

**Usage**
```
var Promise = require('easy-promise-all');

EasyPromise({
      resultFromPromise1: newPromise1(),
      resultFromPromise2: newPromise2(),
    }).then((results) => {
      const result1 = results.resultFromPromise1;
      const result2 = results.resultFromPromise2;
    });
```
