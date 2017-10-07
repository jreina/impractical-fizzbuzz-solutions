const fizzBuzz = size => {
  let arr = Array(size).fill([]);
  for (let i = 0; i < size; i += 3) {
    arr[i] = arr[i].concat("Fizz");
  }
  for (let j = 0; j < size; j += 5) {
    arr[j] = arr[j].concat("Buzz");
  }
  for (let k = 0; k < size; k++) {
    if (arr[k].length == 0) {
      arr[k] = arr[k].concat(k);
    }
  }
  for (let l = 0; l < size; l++) {
    arr[l] = arr[l].join("");
  }
  return arr;
};

fizzBuzz(100);
