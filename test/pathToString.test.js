'use strict';

import chai from 'chai';

const // should = chai.should(),
expect = chai.expect;

import asserttype from 'chai-asserttype';
chai.use(asserttype);

import {forLodashes} from './common.js';
forLodashes(['pathToString'], (_) => {
  it('a.b.c.defg[0][1]["2.3"]', () => {
    const path = ['a', 'b', 'c', 'defg', 0, '1', 2.3, -55, '-66', undefined];
    expect(_.pathToString(path)).to.equal(
      'a.b.c.defg[0][1]["2.3"]["-55"]["-66"]["undefined"]'
    );
    expect(_.pathToString(path, 'prefix', '[0]')).to.equal(
      'prefix[0].a.b.c.defg[0][1]["2.3"]["-55"]["-66"]["undefined"]'
    );
  });
  it('escape double quote', () => {
    expect(_.pathToString(['"', '"', '"', ''])).to.equal(
      '["\\""]["\\""]["\\""][""]'
    );
  });
  it('return string as is', () => {
    expect(_.pathToString('it.s.a.string')).to.equal('it.s.a.string');
  });
});
