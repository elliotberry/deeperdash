'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getEachDeep from './getEachDeep.js';

/* build/tpl */

function addEachDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('eachDeep', getEachDeep(_), !getEachDeep.notChainable);
}

export default addEachDeep;
