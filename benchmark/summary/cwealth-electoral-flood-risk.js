'use strict';

const apiSearch = require('../api-search');
const searchByCount = require('./search-by-count');

const testConditions = [
  { },
  { ce_pid: 'SA6' },
  { name: 'herb' },
  { state: 'qld' }
];

function simple(deferred) {
  return apiSearch(testConditions, '/cwealth-electoral-flood-risk/search', deferred);
}


function byCounts(deferred) {
  return apiSearch(searchByCount.getTestConditions(1, 110000, 10, searchByCount.countParams), '/cwealth-electoral-flood-risk/search', deferred);
}

module.exports = {
  search: {
    simple: simple,
    byCounts: byCounts
  }
};