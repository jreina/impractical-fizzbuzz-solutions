let nums = 100;
const fizzBuzz = () => {
    for (let i = 1; i < nums; i++) {
        let flag = true;
        if (i % 3 === 0) {
            process.stdout.write("Fizz");
            flag = false;
        }
        if (i % 5 === 0) {
            process.stdout.write("Buzz");
            flag = false;
        }
        if (flag)
            process.stdout.write(i + "");
        process.stdout.write("\n");
    }
};
fizzBuzz();