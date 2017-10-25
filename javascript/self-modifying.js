(function fizzbuzz() {
  console.log(!(1 % 15) ? 'fizzbuzz' : !(1 % 3) ? 'fizz' : !(1 % 5) ? 'buzz' : (1));

  if (1 >= 100) {
    return;
  } else {
    eval(fizzbuzz.toString().replace(/\((\d+)/g, (_, capture) => `(${Number(capture) + 1}`));
  }

  fizzbuzz();
})();
