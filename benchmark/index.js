'use strict';

const Benchmark = require('benchmark');
const addressFloodRisk = require('./address-flood-risk');
const summary = require('./summary');
const smokeTest = require('./smoke-test');

new Benchmark.Suite('address-flood-risk api')
  .add('smoke test', smokeTest, { defer: true, minSamples: 50 })
  .add('address-flood-risk/search (simple)', addressFloodRisk.search.simple, { defer: true, minSamples: 5 })
  .add('address-flood-risk/search (all postcodes)', addressFloodRisk.search.allPostcodes, { defer: true, minSamples: 5 })
  .add('address-flood-risk/geo-search (specific points)', addressFloodRisk.geoSearch.specificPoints, { defer: true, minSamples: 5 })
  .add('address-flood-risk/geo-search (across Sydney)', addressFloodRisk.geoSearch.acrossSydney, { defer: true, minSamples: 5 })
  .add('cwealth-electoral-flood-risk/search (simple)', summary.cwealthElectoralFloodRisk.search.simple, { defer: true, minSamples: 5 })
  .add('cwealth-electoral-flood-risk/search (all counts)', summary.cwealthElectoralFloodRisk.search.byCounts, { defer: true, minSamples: 5 })
  .add('local-gov-flood-risk/search (simple)', summary.localGovFloodRisk.search.simple, { defer: true, minSamples: 5 })
  .add('local-gov-flood-risk/search (all counts)', summary.localGovFloodRisk.search.byCounts, { defer: true, minSamples: 5 })
  .add('locality-flood-risk/search (simple)', summary.localityFloodRisk.search.simple, { defer: true, minSamples: 5 })
  .add('locality-flood-risk/search (all counts)', summary.localityFloodRisk.search.byCounts, { defer: true, minSamples: 5 })
  .on('cycle', (event)=> {
    console.log(event.target.name);
    console.log(event.target.stats.sample);
  })
  .on('complete', function() {
    console.log('Done');
  })
  .run({ async: true });