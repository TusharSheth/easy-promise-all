module.exports = {
  EasyPromiseAll: (promisesObj) => {
    return new Promise((resolve, reject) => {
      try {
        const promiseList = [];
        // get all promise keys from passed obj
        const promiseKeys = Object.keys(promisesObj)
          .map((key) => {
            promiseList.push(promisesObj[key]);
            return key;
          });

        Promise.all(promiseList)
          .then((promiseResults) => {
            const resultObject = {};
            promiseKeys.forEach((key, i) => {
              resultObject[key] = promiseResults[i];
            });
            resolve(resultObject);
          })
          .catch(err => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  },
};
