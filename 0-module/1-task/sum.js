function sum(a, b) {
  if (a !== parseInt(a) || b !== parseInt(b)) throw new TypeError();
  return a + b;
}

module.exports = sum;
