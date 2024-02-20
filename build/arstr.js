export default function(str, cb) {
  str = str.split('');
  str = cb(str) || str;
  return str.join('');
};

export function upFirst(str) {
  return module.exports(str, (arr) => {
    arr[0] = arr[0].toUpperCase();
  });
}

export function lowFirst(str) {
  return module.exports(str, (arr) => {
    arr[0] = arr[0].toLowerCase();
  });
}
