'use strict';

const apiSearch = require('../api-search');

const testConditions = [
  { latitude: -31.97837603690073, longitude: 115.80757141113281, limit: 50 },
  { latitude: -34.93407470597913, longitude: 138.6031723022461, limit: 50 },
  { latitude: -37.86509663749013, longitude: 144.97713088989258, limit: 50 },
  { latitude: -33.894036706717614, longitude: 151.27259731292725, limit: 50 },
  { latitude: -27.472105135071544, longitude: 153.04607391357422, limit: 50 },
  { latitude: -27.481166854792416, longitude: 153.07611465454102 },
  { latitude: -23.70945258490867, longitude: 133.93630027770996 },
  { latitude: -14.462690304330271, longitude: 132.2657346725464 },
  { latitude: -12.440012999164116, longitude: 130.86012840270996 },
  { latitude: -10.580971853110427, longitude: 142.22007751464844 }
];

function specificPoints(deferred) {
  return apiSearch(testConditions, '/address-flood-risk/geo-search', deferred);
};

function acrossSydney(deferred) {
  let latitude = -33.89264740799733;
  let longitudeWest = 151.00879669189453;
  let longitudeEast = 151.27418518066406;
  let steps = 20;
  let stepSize = (longitudeEast - longitudeWest) / steps;
  let conditions = [];
  while (longitudeWest <= longitudeEast) {
    conditions.push({ latitude: latitude, longitude: longitudeWest, limit: 50, max_distance: 1000 });
    longitudeWest += stepSize;
  }
  return apiSearch(conditions, '/address-flood-risk/geo-search', deferred);
}

module.exports = {
  specificPoints: specificPoints,
  acrossSydney: acrossSydney
};