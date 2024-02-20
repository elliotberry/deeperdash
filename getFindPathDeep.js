'use strict';

import getFindDeep from './getFindDeep.js';

function getFindPathDeep(_) {
  var findDeep = getFindDeep(_);
  function findPathDeep(obj, predicate, options) {
    var res = findDeep(obj, predicate, options);
    return res && res.context.path;
  }
  return findPathDeep;
}

export default getFindPathDeep;
