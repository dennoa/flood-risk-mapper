'use strict';

const apiSearch = require('../api-search');
const searchByCount = require('./search-by-count');

const testConditions = [
  { },
  { loc_pid: 'VIC1948' },
  { name: 'upper' },
  { state: 'sa' }
];

function simple(deferred) {
  return apiSearch(testConditions, '/locality-flood-risk/search', deferred);
}


function byCounts(deferred) {
  return apiSearch(searchByCount.getTestConditions(1, 38000, 10, searchByCount.countParams), '/locality-flood-risk/search', deferred);
}

module.exports = {
  search: {
    simple: simple,
    byCounts: byCounts
  }
};