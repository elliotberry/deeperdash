'use strict';

import condense from './condense.js';
import _merge from 'lodash/merge.js';
import forArray from './own/forArray.js';
import eachDeep from './eachDeep.js';

var deps = _merge(
  {
    merge: _merge,
    forArray: forArray,
  },
  condense,
  eachDeep
);

export default deps;
