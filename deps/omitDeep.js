
import _merge from 'lodash/merge.js';
import filterDeep from './filterDeep.js';
import pathMatches from './pathMatches.js';

var deps = _merge({ merge: _merge }, pathMatches, filterDeep);

export default deps;
