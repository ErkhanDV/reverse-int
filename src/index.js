module.exports = function reverse (n) {
  let newStr = '';
  const str = Math.abs(n).toString();
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return Number(newStr);
}
