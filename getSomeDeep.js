'use strict';

import getFindDeep from './getFindDeep.js';

function getSomeDeep(_) {
  var findDeep = getFindDeep(_);
  function someDeep(obj, predicate, options) {
    return !!findDeep(obj, predicate, options);
  }
  return someDeep;
}

export default getSomeDeep;
