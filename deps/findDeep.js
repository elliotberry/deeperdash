
import _merge from 'lodash/merge.js';
import eachDeep from './eachDeep.js';
import _cloneDeep from 'lodash/cloneDeep.js';
import _iteratee from 'lodash/iteratee.js';

var deps = _merge(
  {
    iteratee: _iteratee,
    cloneDeep: _cloneDeep,
    merge: _merge,
  },
  eachDeep
);

export default deps;
