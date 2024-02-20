'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getPathMatches from './getPathMatches.js';

/* build/tpl */

function addPathMatches(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('pathMatches', getPathMatches(_), !getPathMatches.notChainable);
}

export default addPathMatches;
