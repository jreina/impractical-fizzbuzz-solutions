const patterns = [[3, "Fizz"], [5, "Buzz"]];
const nums = Array(100)
  .fill(0)
  .map((v, i) => i);

// I apologize in advance.
const fizzBuzz = patterns => nums => {
  const check = checkVal => valIfDivisible => val =>
    val % checkVal && val ? "" : valIfDivisible;
  const processNumber = (memo, [checkVal, valIfDivisible]) =>
    memo + check(checkVal)(valIfDivisible)(val);
  const performChecks = val => patterns.reduce(processNumber, "");
  const getPair = val => [val, performChecks(val)];
  return nums.map(getPair);
};

const fizzBuzzyPairs = fizzBuzz(patterns)(nums);
