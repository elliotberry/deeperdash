'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getCondense from './getCondense.js';

/* build/tpl */

function addCondense(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('condense', getCondense(), !getCondense.notChainable);
}

export default addCondense;
