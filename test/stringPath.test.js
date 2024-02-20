'use strict';

import chai from 'chai';

const // should = chai.should(),
expect = chai.expect;

import asserttype from 'chai-asserttype';
chai.use(asserttype);

import {forLodashes} from './common.js';
forLodashes(['index'], (_) => {
  it('[.]\'"', () => {
    let o = { a: { '[': 'c', '"\'': 'd', '.': 'e' } };

    expect(_.get(o, "a['[']")).to.equal('c');
    expect(_.get(o, "a['\"\\'']")).to.equal('d');
    expect(_.get(o, 'a["\\"\'"]')).to.equal('d');
    expect(_.get(o, "a['.']")).to.equal('e');

    let index = _.index(o);
    _.each(index, (v, k) => {
      expect(_.get(o, k)).to.equal(v);
    });
  });
});
