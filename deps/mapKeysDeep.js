'use strict';

import _merge from 'lodash/merge.js';
import _cloneDeep from 'lodash/cloneDeep.js';
import _has from 'lodash/has.js';
import _unset from 'lodash/unset.js';
import mapValuesDeep from './mapValuesDeep.js';

var deps = _merge(
  {
    cloneDeep: _cloneDeep,
    has: _has,
    unset: _unset,
  },
  mapValuesDeep
);

export default deps;
