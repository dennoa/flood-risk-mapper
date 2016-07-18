'use strict';

const Benchmark = require('benchmark');
const addressFloodRisk = require('./address-flood-risk');

new Benchmark.Suite('address-flood-risk api')
  .add('address-flood-risk/search', addressFloodRisk.search, { defer: true, minSamples: 5 })
  .add('address-flood-risk/geo-search (specific points)', addressFloodRisk.geoSearch.specificPoints, { defer: true, minSamples: 5 })
  .add('address-flood-risk/geo-search (across Sydney)', addressFloodRisk.geoSearch.acrossSydney, { defer: true, minSamples: 5 })
  .on('cycle', (event)=> {
    console.log(event.target.name);
    console.log(event.target.stats.sample);
  })
  .on('complete', function() {
    console.log('Done');
  })
  .run({ async: true });