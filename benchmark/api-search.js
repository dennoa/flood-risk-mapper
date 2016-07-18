'use strict';

const apiRequest = require('./api-request');

module.exports = (testConditions, path, deferred)=> {
  let tests = [];
  for (let conditions of testConditions) {
    tests.push(apiRequest({ path: path, body: conditions }));
  }
  return Promise.all(tests).then(()=> {
    deferred.resolve();
  }).catch((err)=> {
    console.log(err);
    deferred.resolve();
  })
};