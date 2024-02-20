import chai from 'chai';
const should = chai.should();
const expect = chai.expect;
import assert from 'assert';
import asserttype from 'chai-asserttype';
chai.use(asserttype);
import forArray from '../deps/own/forArray';
describe('self-inplemented dependency fulfillment', () => {
  it('forArray', () => {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let res = [];
    forArray(arr, (c) => res.push(c));
    expect(res).to.deep.equal(arr);
    res = [];
    forArray(arr, (c) => res.push(c) && c != 'd');
    expect(res).to.deep.equal(['a', 'b', 'c', 'd']);
  });
});
