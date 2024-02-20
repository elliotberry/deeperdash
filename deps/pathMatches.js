'use strict';

import _merge from 'lodash/merge.js';
import _isString from 'lodash/isString.js';
import _toPath from 'lodash/toPath.js';
import pathToString from './pathToString.js';
import _cloneDeep from 'lodash/cloneDeep.js';
import _isEqual from 'lodash/isEqual.js';
import _takeRight from 'lodash/takeRight.js';

var deps = _merge(
  {
    isString: _isString,
    toPath: _toPath,
    isEqual: _isEqual,
    takeRight: _takeRight,
    cloneDeep: _cloneDeep,
  },
  pathToString
);

export default deps;
