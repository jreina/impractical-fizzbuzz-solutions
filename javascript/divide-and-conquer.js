const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i); // [1, 2, 3, ...100]
}

function split(xs) {
  const midpoint = Math.floor(xs.length * 0.5);
  return [xs.slice(0, midpoint), xs.slice(midpoint)];
}

function fizzbuzz(xs) {
  // base case: array of zero or one
  if (xs.length <= 1) {
    if (xs[0] % 15 === 0) {
      return ['fizzbuzz'];
    } else if (xs[0] % 3 === 0) {
      return ['fizz'];
    } else if (xs[0] % 5 === 0) {
      return ['buzz'];
    }

    return xs;
  }

  // too many numbers to think about! solve recursively with a smaller list
  const [left, right] = split(xs);
  return fizzbuzz(left).concat(fizzbuzz(right));
}

fizzbuzz(numbers).forEach(x => console.log(x));
