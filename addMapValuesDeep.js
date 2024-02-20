'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getMapValuesDeep from './getMapValuesDeep.js';

/* build/tpl */

function addMapValuesDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('mapValuesDeep', getMapValuesDeep(_), !getMapValuesDeep.notChainable);
}

export default addMapValuesDeep;
