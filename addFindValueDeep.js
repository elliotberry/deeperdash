'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getFindValueDeep from './getFindValueDeep.js';

/* build/tpl */

function addFindValueDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('findValueDeep', getFindValueDeep(_), !getFindValueDeep.notChainable);
}

export default addFindValueDeep;
