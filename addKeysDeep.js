'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getKeysDeep from './getKeysDeep.js';

/* build/tpl */

function addKeysDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('keysDeep', getKeysDeep(_), !getKeysDeep.notChainable);
}

export default addKeysDeep;
