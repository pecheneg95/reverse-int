module.exports = function reverse (n) {
  return Math.abs(n).toString().split('').map(el => parseInt(el, 10)).reverse().join('')
}
