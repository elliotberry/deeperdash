'use strict';

var { demo, circular } = require('./object')();

import {forLodashes, it, expect} from './common.js';
var hrstart = process.hrtime();
forLodashes(['omitDeep'], (_) => {
  it('no mutation', () => {
    let orig = _.cloneDeep(demo);
    let obj = _.cloneDeep(demo);
    let clean = _.omitDeep(obj, 'skip');
    clean = _.omitDeep(clean, 'o', { onMatch: { skipChildren: true } });
    expect(clean);
    expect(obj);
  });
  it('demo skip', () => {
    let clean = _.omitDeep(demo, 'skip');
    clean = _.omitDeep(clean, 'o', { onMatch: { skipChildren: true } });
    expect(clean);
  });
  it('array of keys', () => {
    let obj = {
      good1: true,
      bad1: false,
      good2: { good3: true, bad3: false },
      bad2: { good: true },
      good4: [{ good5: true, bad5: false }],
      bad4: [],
    };
    let clean = _.omitDeep(obj, ['bad1', 'bad2', 'bad3', 'bad4', 'bad5'], {
      onMatch: { skipChildren: true },
    });
    expect(clean);
  });
  it('regex', () => {
    let obj = {
      good1: true,
      bad1: false,
      good2: { good3: true, bad3: false },
      bad2: { good: true },
      good4: [{ good5: true, bad5: true }],
      bad4: [],
    };
    let clean = _.omitDeep(obj, /\.?bad.*$/);
    expect(clean);
  });
});
const hrend = process.hrtime(hrstart);
console.info('✓ %ds %dms', hrend[0], hrend[1] / 1000000);
