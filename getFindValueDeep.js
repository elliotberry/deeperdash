'use strict';

import getFindDeep from './getFindDeep.js';

function getFindValueDeep(_) {
  var findDeep = getFindDeep(_);
  function findValueDeep(obj, predicate, options) {
    var res = findDeep(obj, predicate, options);
    return res && res.value;
  }
  return findValueDeep;
}

export default getFindValueDeep;
