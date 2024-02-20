'use strict';

import _merge from 'lodash/merge.js';
import _isObject from 'lodash/isObject.js';
import _isEmpty from 'lodash/isEmpty.js';
import _get from 'lodash/get.js';
import pathToString from './pathToString.js';

var deps = _merge(
  {
    isObject: _isObject,
    isEmpty: _isEmpty,
    get: _get,
  },
  pathToString
  // hasChildrenDeps
);

export default deps;
