'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getMapDeep from './getMapDeep.js';

/* build/tpl */

function addMapDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('mapDeep', getMapDeep(_), !getMapDeep.notChainable);
}

export default addMapDeep;
