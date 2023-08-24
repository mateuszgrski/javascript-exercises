const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
    return a - b
};

const sum = function(arr) {
    return arr.reduce((acc, val) => acc + val, 0)
};

const multiply = function(arr) {
    return arr.reduce((acc, val) => acc * val)
};

const power = function(basis, exponent) {
    return basis ** exponent
};

const factorial = function(n) {
    n = (n === 0) ? 1 : n * factorial(n-1)
    return n
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
