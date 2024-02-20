export default function (methodsList) {
  return (
    `/* build/tpl */
` +
    methodsList.reduce(
      (res, methodName) =>
        res +
        `export { default as ${methodName} } from './${methodName}.js';\n`,
      ''
    )
  );
};
