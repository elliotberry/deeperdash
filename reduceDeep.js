'use strict';

import getReduceDeep from './getReduceDeep.js';
import eachDeep from './deps/eachDeep.js';

/* build/tpl */
var reduceDeep = getReduceDeep(eachDeep);

export default reduceDeep;
