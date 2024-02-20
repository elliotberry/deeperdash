'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getPathToString from './getPathToString.js';

/* build/tpl */

function addPathToString(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('pathToString', getPathToString(_), !getPathToString.notChainable);
}

export default addPathToString;
