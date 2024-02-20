'use strict';

import _merge from 'lodash/merge.js';
import eachDeep from './eachDeep.js';
import _iteratee from 'lodash/iteratee.js';

var deps = _merge(
  {
    iteratee: _iteratee,
  },
  eachDeep
);

export default deps;
