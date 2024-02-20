'use strict';

import _merge from 'lodash/merge.js';
import _identity from 'lodash/identity.js';
import _isString from 'lodash/isString.js';
import _toPath from 'lodash/toPath.js';
import iterate from './iterate.js';

var deps = _merge(
  {
    identity: _identity,
    merge: _merge,
    isString: _isString,
    toPath: _toPath,
  },
  iterate
);

export default deps;
