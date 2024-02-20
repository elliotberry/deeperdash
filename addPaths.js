'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getPaths from './getPaths.js';

/* build/tpl */

function addPaths(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('paths', getPaths(_), !getPaths.notChainable);
}

export default addPaths;
