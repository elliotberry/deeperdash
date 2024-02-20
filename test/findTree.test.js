'use strict';

import chai from 'chai';

const // should = chai.should(),
expect = chai.expect;

import asserttype from 'chai-asserttype';
chai.use(asserttype);

var {
  children,
  childrenCircular,
  comments,
  verifiedComments,
  deeperComments,
  deeperCommentsCircular,
  badChildren,
} = require('./object')();
import {validateIteration, forLodashes} from './common.js';

forLodashes(['findDeep'], (_) => {
  it('findTree by field', () => {
    let found = _.findDeep(comments, 'verified', {
      childrenPath: 'replies',
    });
    //console.log(JSON.stringify(found, null, 2));
    expect(found.value.text).equal('Perfect!');
    found = _.findDeep(comments, ['verified', false], {
      childrenPath: 'replies',
    });
    //console.log(JSON.stringify(found, null, 2));
    expect(found.value.text).equal('Agree');
  });
  it('findTree by field - pathFormat: array', () => {
    let found = _.findDeep(comments, 'verified', {
      childrenPath: 'replies',
      pathFormat: 'array',
    });
    // console.log(JSON.stringify(found, null, 2));
    expect(found.value.text).equal('Perfect!');
  });
  it('findTree no leavesOnly', () => {
    try {
      let found = _.findDeep(comments, 'verified', {
        childrenPath: 'replies',
        leavesOnly: true,
      });
    } catch (exc) {
      expect(exc.message).equal(
        '"leavesOnly" option cannot be true in the "tree" mode.'
      );
    }
  });
  it('findTree default', () => {
    let found = _.findDeep(children, ['name', 'child 1.2.1'], {
      childrenPath: 'children',
    });
    expect(found.context.path).equal('[0].children[1].children[0]');
  });

  it('findTree rootIsChildren', () => {
    let found = _.findDeep(
      { g1: children[0], g2: children[1] },
      ['name', 'child 1.2.1'],
      {
        childrenPath: 'children',
        rootIsChildren: true,
      }
    );
    expect(found.context.path).equal('g1.children[1].children[0]');
  });

  it('findTree deeper nodes circular', () => {
    let found = _.findDeep(
      deeperCommentsCircular,
      {
        verified: true,
        text: "Don't listen to him, it will be unreadable!",
      },
      {
        checkCircular: true,
        childrenPath: 'feedback.replies',
      }
    );
    expect(found.value.name).to.equal('Bob');
    expect(found.context.path).to.equal(
      '[1].feedback.replies[0].feedback.replies[0].feedback.replies[0]'
    );
  });
});
