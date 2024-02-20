'use strict';

import chai from 'chai';

const // should = chai.should(),
expect = chai.expect;

// assert = require('assert'),
var _ = require('lodash').runInContext();

import deep from '../deepdash';
import asserttype from 'chai-asserttype';
chai.use(asserttype);
describe('Methods exist already', () => {
  it('check them', () => {
    _ = _.runInContext();
    _.mixin({ eachDeep: () => 'no room!' });
    _ = deep(_);
    expect(_.eachDeep()).to.equal('no room!');

    _ = _.runInContext();
    _.mixin({ forEachDeep: () => 'no room!' });
    _ = deep(_);
    expect(_.forEachDeep()).to.equal('no room!');

    _ = _.runInContext();
    _.mixin({ index: () => 'no room!' });
    _ = deep(_);
    expect(_.index()).to.equal('no room!');

    _ = _.runInContext();
    _.mixin({ keysDeep: () => 'no room!' });
    _ = deep(_);
    expect(_.keysDeep()).to.equal('no room!');

    _ = _.runInContext();
    _.mixin({ paths: () => 'no room!' });
    _ = deep(_);
    expect(_.paths()).to.equal('no room!');

    _ = _.runInContext();
    _.mixin({ filterDeep: () => 'no room!' });
    _ = deep(_);
    expect(_.filterDeep()).to.equal('no room!');
  });
});
