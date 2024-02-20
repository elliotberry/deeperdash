'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getFindDeep from './getFindDeep.js';

/* build/tpl */

function addFindDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('findDeep', getFindDeep(_), !getFindDeep.notChainable);
}

export default addFindDeep;
