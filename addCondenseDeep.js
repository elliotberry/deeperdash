'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getCondenseDeep from './getCondenseDeep.js';

/* build/tpl */

function addCondenseDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('condenseDeep', getCondenseDeep(_), !getCondenseDeep.notChainable);
}

export default addCondenseDeep;
