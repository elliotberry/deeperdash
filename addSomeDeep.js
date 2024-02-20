'use strict';

import getMixOrPatchIn from './private/getMixOrPatchIn.js';
import getSomeDeep from './getSomeDeep.js';

/* build/tpl */

function addSomeDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn(_);
  return mixOrPatchIn('someDeep', getSomeDeep(_), !getSomeDeep.notChainable);
}

export default addSomeDeep;
