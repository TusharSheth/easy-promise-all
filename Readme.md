# easy-promise-all
This is a plain implementation of object Promises. With **easy-promise-all** you can use key-value pair to get result returned by Promise.all().
**easy-promise-all** uses vanilla java script.

**Installation**

```$ npm install easy-promise-all```

**Usage**
```
var { EasyPromiseAll } = require('easy-promise-all');

EasyPromiseAll({
    resultFromPromise1: newPromise1(),
    resultFromPromise2: newPromise2(),
  }).then((results) => {
    const { resultFromPromise1, resultFromPromise2 } = results;
    console.log(resultFromPromise1, resultFromPromise2);
  });
```

**More info**
https://www.npmjs.com/package/easy-promise-all
