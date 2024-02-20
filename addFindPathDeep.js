'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getFindPathDeep from './getFindPathDeep.js';

/* build/tpl */

function addFindPathDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('findPathDeep', getFindPathDeep(_), !getFindPathDeep.notChainable);
}

export default addFindPathDeep;
