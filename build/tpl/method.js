import arstr from '../arstr';

export default function (methodName) {
  let capMethodName = arstr.upFirst(methodName);

  return `/* build/tpl */
import deps from './deps/${methodName}.js';
import get${capMethodName} from './get${capMethodName}.js';
export default get${capMethodName}(deps);
`;
};
