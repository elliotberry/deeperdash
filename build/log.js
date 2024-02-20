import figures from 'figures';
import chalk from 'chalk';
export default (...rest) => console.log(chalk.cyan(figures(' →')), ...rest);

export function done(...rest) {
  return console.log(chalk.green(figures(' ✔')), ...rest);
}

export function fail(...rest) {
  return console.log(chalk.red(figures(' ✖')), ...rest);
}

export function warn(...rest) {
  return console.log(chalk.yellow(figures(' ⚠')), ...rest);
}
