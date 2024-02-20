'use strict';

import getSomeDeep from './getSomeDeep.js';
import findDeep from './deps/findDeep.js';

/* build/tpl */
var someDeep = getSomeDeep(findDeep);

export default someDeep;
