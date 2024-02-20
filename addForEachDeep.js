'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getForEachDeep from './getForEachDeep.js';

/* build/tpl */

function addForEachDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('forEachDeep', getForEachDeep(_), !getForEachDeep.notChainable);
}

export default addForEachDeep;
