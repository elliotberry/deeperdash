'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getIndex from './getIndex.js';

/* build/tpl */

function addIndex(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('index', getIndex(_), !getIndex.notChainable);
}

export default addIndex;
