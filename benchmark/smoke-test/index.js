'use strict';

const apiRequest = require('../api-request');
const _ = require('lodash');

function handleErr(err) {
  console.log(err);
  throw new Error(err);
}

function verifyMatchingAddress(requestOptions, address, gnafPid) {
  return new Promise((resolve, reject)=> {
    apiRequest(requestOptions).then((result)=> {
      let addresses = (result instanceof Array) ? result : [result];
      if (!_.find(addresses, (addr => addr[gnafPid] === address.gnaf_pid))) {
        return reject(requestOptions.path + ' failed to find the matching address');
      }
      resolve();
    }).catch(reject);
  });
}

function verifyAddressOperations() {
  return new Promise((resolve, reject)=> {
    apiRequest({ path: '/address-flood-risk/search' }).then((addresses)=> {
      let address = addresses[Math.floor(Math.random() * addresses.length)];
      let matches = [];
      matches.push(verifyMatchingAddress({ path: '/address-flood-risk/geo-search', body: { longitude: address.longitude, latitude: address.latitude, limit: 50 } }, address, 'gnaf_pid'));
      matches.push(verifyMatchingAddress({ path: '/address-point/search', body: { longitude: address.longitude, latitude: address.latitude, limit: 50 } }, address, 'address_detail_pid'));
      matches.push(verifyMatchingAddress({ path: '/address-point/' + address.gnaf_pid, method: 'GET' }, address, 'address_detail_pid'));
      Promise.all(matches).then(resolve, reject);
    }).catch(reject);
  });
}

function verifyGeocodeTypeOperations() {
  return new Promise((resolve, reject)=> {
    apiRequest({ path: '/geocode-type', method: 'GET' }).then((types)=> {
      let type = types[Math.floor(Math.random() * types.length)];
      apiRequest({ path: '/geocode-type/' + type.code, method: 'GET' }).then((geocodeType)=> {
        if (!geocodeType || geocodeType.code !== type.code) {
          return reject('/geocode-type/' + type.code + ' failed to find the matching geocode type');
        }
        resolve();
      });
    }).catch(reject);
  });
}

function verifyLocalityOperations() {
  return new Promise((resolve, reject)=> {
    apiRequest({ path: '/locality-flood-risk/search' }).then((localities)=> {
      let locality = localities[Math.floor(Math.random() * localities.length)];
      apiRequest({ path: '/locality-point/' + locality.loc_pid, method: 'GET' }).then((localityPoint)=> {
        if (!localityPoint || localityPoint.loc_pid !== locality.loc_pid) {
          return reject('/locality-point/' + locality.loc_pid + ' failed to find the matching locality');
        }
        apiRequest({ path: '/locality-point/search', body: { longitude: localityPoint.longitude, latitude: localityPoint.latitude, limit: 50 } }).then((localities)=> {
          if (!_.find(localities, (loc => loc.loc_pid === localityPoint.loc_pid))) {
            return reject('/locality-point/search failed to find the matching locality');
          }
          resolve();
        });
      });
    }).catch(reject);
  });
}

function verifyLocalGovOperations() {
  return apiRequest({ path: '/local-gov-flood-risk/search' });
}

function verifyCwealthElectoralOperations() {
  return apiRequest({ path: '/cwealth-electoral-flood-risk/search' });
}

function smokeTest(deferred) {
  let apiRequests = [];
  apiRequests.push(verifyAddressOperations());
  apiRequests.push(verifyGeocodeTypeOperations());
  apiRequests.push(verifyLocalityOperations());
  apiRequests.push(verifyLocalGovOperations());
  apiRequests.push(verifyCwealthElectoralOperations());
  Promise.all(apiRequests).then(()=> { deferred.resolve(); }).catch(handleErr);
}

module.exports = smokeTest;