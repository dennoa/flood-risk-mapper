'use strict';

const config = require('./config');
const request = require('request');

module.exports = (options)=> {
  return new Promise((resolve, reject)=> {
    let requestOptions = {
      method: options.method || 'POST',
      url: config.api.url + options.path,
      headers: config.api.headers,
      proxy: config.api.proxy
    };
    if (requestOptions.method === 'POST') {
      requestOptions.body = JSON.stringify(options.body || {});
    }
    request(requestOptions, (err, res, body)=> {
      if (err) { return reject(err); }
      if (res.statusCode !== 200) { return reject({res: { statusCode: res.statusCode, body: res.body }, req: requestOptions}); }
      let json = (body) ? JSON.parse(body) : null;
      resolve(json);
    });
  });
};