'use strict';

import _merge from 'lodash/merge.js';
import _isObject from 'lodash/isObject.js';
import _get from 'lodash/get.js';
import eachDeep from './eachDeep.js';
import condenseDeep from './condenseDeep.js';
import _clone from 'lodash/clone.js';
import _cloneDeep from 'lodash/cloneDeep.js';
import _each from 'lodash/each.js';
import _eachRight from 'lodash/eachRight.js';
import _has from 'lodash/has.js';
import _set from 'lodash/set.js';
import _unset from 'lodash/unset.js';
import _isPlainObject from 'lodash/isPlainObject.js';
import _iteratee from 'lodash/iteratee.js';

var deps = _merge(
  {
    merge: _merge,
    clone: _clone,
    cloneDeep: _cloneDeep,
    isObject: _isObject,
    each: _each,
    eachRight: _eachRight,
    has: _has,
    set: _set,
    unset: _unset,
    isPlainObject: _isPlainObject,
    iteratee: _iteratee,
    get: _get,
  },
  eachDeep,
  condenseDeep
);

export default deps;
