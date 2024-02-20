'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getReduceDeep from './getReduceDeep.js';

/* build/tpl */

function addReduceDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('reduceDeep', getReduceDeep(_), !getReduceDeep.notChainable);
}

export default addReduceDeep;
