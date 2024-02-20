'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getOmitDeep from './getOmitDeep.js';

/* build/tpl */

function addOmitDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('omitDeep', getOmitDeep(_), !getOmitDeep.notChainable);
}

export default addOmitDeep;
