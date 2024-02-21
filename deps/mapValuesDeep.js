
import _merge from 'lodash/merge.js';
import _isObject from 'lodash/isObject.js';
import eachDeep from './eachDeep.js';
import _clone from 'lodash/clone.js';
import _set from 'lodash/set.js';
import _iteratee from 'lodash/iteratee.js';

var deps = _merge(
  {
    iteratee: _iteratee,
    isObject: _isObject,
    clone: _clone,
    set: _set,
  },
  eachDeep
);

export default deps;
