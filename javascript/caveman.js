const nums = Array(100)
  .fill(0)
  .map((v, i) => i);

const fizzBuzz = nums => {
  let ar = [],
    current;
  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    if (current % 3 === 0 && current % 5 === 0) ar.push("FizzBuzz");
    else if (current % 3 === 0) ar.push("Fizz");
    else if (current % 5 === 0) ar.push("Buzz");
    else ar.push(current);
  }
  return ar;
};

fizzBuzz(nums);
