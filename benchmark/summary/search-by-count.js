'use strict';

function getRanges(from, to, howMany) {
  let ranges = [];
  let skip = parseInt((to - from) / howMany);
  for (let i=from; i<=to; i+=skip) {
    ranges.push({min: i, max: i+skip-1});
  }
  return ranges;
}

function getTestConditions(from, to, howMany, params) {
  let testConditions = [];
  for (let param of params) {
    let ranges = getRanges(from, to, howMany);
    for (let range of ranges) {
      let condition = { limit: 50 };
      condition[param] = range;
      testConditions.push(condition);
    }
  }
  return testConditions;
}

const countParams = ['count_low_aad','count_medium_aad','count_high_aad','count_low_frequency','count_medium_frequency','count_high_frequency','total_aad','rank_aad'];

module.exports = {
  getTestConditions: getTestConditions,
  countParams: countParams
};