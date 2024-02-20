'use strict';

import chai from 'chai';
const should = chai.should();
const expect = chai.expect;
import assert from 'assert';
var { demo } = require('./object')();

import {forLodashes} from './common.js';
forLodashes(['eachDeep'], (_) => {
  it('Count nodes', () => {
    _.eachDeep(demo, (value, key, parent, ctx) => {
      // console.log('path:', ctx.path);
      // console.log('parent:', parent);
      // console.log('ctx.parent:', ctx.parent);
      // console.log('parents:', ctx.parents);
      // console.log('-----------');
      if (ctx.parent === undefined) return;
      expect(parent).equal(ctx.parent.value);
      expect(ctx.parent).equal(_.last(ctx.parents));
      _.each(ctx.parents, (p, i) => {
        if (i) {
          expect(p.parent).equal(ctx.parents[i - 1]);
        }
      });
    });
  });
});
