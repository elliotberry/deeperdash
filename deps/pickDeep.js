
import _merge from 'lodash/merge.js';
import omitDeep from './omitDeep.js';

var deps = _merge({ merge: _merge }, omitDeep);

export default deps;
