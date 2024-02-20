'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getMapKeysDeep from './getMapKeysDeep.js';

/* build/tpl */

function addMapKeysDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('mapKeysDeep', getMapKeysDeep(_), !getMapKeysDeep.notChainable);
}

export default addMapKeysDeep;
