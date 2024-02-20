'use strict';

var { demo, circular, social } = require('./object')();
import {validateIteration, forLodashes, it, expect} from './common.js';
var hrstart = process.hrtime();
forLodashes(['reduceDeep'], (_) => {
  it('defaults', () => {
    let res = _.reduceDeep(
      demo,
      (acc, value, key, parent, ctx) => {
        validateIteration(value, key, parent, ctx, { method: 'reduceDeep' });
        acc.push(key);
        return acc;
      },
      []
    );

    expect(JSON.stringify(res));
  });

  it('defaults, no initial', () => {
    let res = _.reduceDeep(
      { a: 2, b: 3, c: { d: 6, e: [1, 5, 8] } },
      (acc, value, key, parent, ctx) => {
        validateIteration(value, key, parent, ctx, { method: 'reduceDeep' });
        if (typeof value == 'number' && (typeof acc != 'number' || value > acc))
          return value;
        return undefined;
      }
    );
    expect(res);
  });

  it('Get specific children', () => {
    let names = _.reduceDeep(
      social,
      (res, v, k, p, c) => {
        res.push(v.name);
        return res;
      },
      [],
      { childrenPath: ['parents', 'children'] }
    );
    expect(names);
  });

  it('Get specific children rootIsChildren', () => {
    let names = _.reduceDeep(
      {
        p0: social[0],
        p1: social[1],
        p2: social[2],
      },
      (res, v, k, p, c) => {
        res.push(v.name);
        return res;
      },
      [],
      {
        childrenPath: ['parents', 'children'],
        rootIsChildren: true,
        includeRoot: false,
      }
    );
    expect(names);
  });

  it('Get first from specific children', () => {
    let names = _.reduceDeep(
      social,
      (res, v, k, p, c) => {
        if (c.childrenPath == 'friends' && k == 0) {
          //console.log(c);
          res.push(v.name);
        }
        return res;
      },
      [],
      { childrenPath: 'friends' }
    );
    expect(names);
  });
});
const hrend = process.hrtime(hrstart);
console.info('✓ %ds %dms', hrend[0], hrend[1] / 1000000);
