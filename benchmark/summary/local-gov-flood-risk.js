'use strict';

const apiSearch = require('../api-search');
const searchByCount = require('./search-by-count');

const testConditions = [
  { },
  { lga_pid: 'NSW267' },
  { name: 'springs' },
  { state: 'nt' }
];

function simple(deferred) {
  return apiSearch(testConditions, '/local-gov-flood-risk/search', deferred);
}


function byCounts(deferred) {
  return apiSearch(searchByCount.getTestConditions(1, 480000, 10, searchByCount.countParams), '/local-gov-flood-risk/search', deferred);
}

module.exports = {
  search: {
    simple: simple,
    byCounts: byCounts
  }
};