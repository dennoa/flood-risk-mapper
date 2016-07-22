'use strict';

const apiSearch = require('../api-search');

const testConditions = [
  { },
  { gnaf_pid: 'GAQLD161255071' },
  { full_address: 'george', postcode: '2000' },
  { locality: 'new farm', postcode: '4005' },
  { average_annual_damage: 'M', flood_frequency: 'M', postcode: '6009' }
];

function simple(deferred) {
  return apiSearch(testConditions, '/address-flood-risk/search', deferred);
}

function to2digits(num) {
  let digits = ('0' + num);
  return digits.substring(digits.length - 2);
}

function toPostcode(first2, last2) {
  return to2digits(first2) + to2digits(last2);
}

function toPostcodeTestConditions(postcode) {
  return { postcode: postcode, limit: 50 };
}

function allPostcodes(deferred) {
  let conditions = [];
  for (let num=0; num<100; num+=20) {
    conditions.push(toPostcodeTestConditions(toPostcode(8, num)));
    for (let first2=20; first2<80; first2++) {
      conditions.push(toPostcodeTestConditions(toPostcode(first2, num)));
    }
  }
  return apiSearch(conditions, '/address-flood-risk/search', deferred);
}

module.exports = {
  simple: simple,
  allPostcodes: allPostcodes
}