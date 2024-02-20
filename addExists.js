'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getExists from './getExists.js';

/* build/tpl */

function addExists(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('exists', getExists(_), !getExists.notChainable);
}

export default addExists;
