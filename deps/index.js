
import _merge from 'lodash/merge.js';
import eachDeep from './eachDeep.js';

var deps = _merge({ merge: _merge }, eachDeep);

export default deps;
