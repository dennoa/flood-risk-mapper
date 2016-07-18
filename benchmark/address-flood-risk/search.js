'use strict';

const apiSearch = require('../api-search');

const testConditions = [
  { },
  { gnaf_pid: 'GAQLD161255071' },
  { full_address: 'george', postcode: '2000' },
  { locality: 'new farm', postcode: '4005' },
  { average_annual_damage: 'M', flood_frequency: 'M', postcode: '6009' }
];

module.exports = (deferred)=> {
  return apiSearch(testConditions, '/address-flood-risk/search', deferred);
};