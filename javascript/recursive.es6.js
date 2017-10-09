const nums = Array(100)
    .fill(0)
    .map((v, i) => i);

const recurse = (each, ar) => {
    if (each.length>0) {
        let current = each[0];
        if (current % 3 === 0 && current % 5 === 0) ar.push("FizzBuzz");
        else if (current % 3 === 0) ar.push("Fizz");
        else if (current % 5 === 0) ar.push("Buzz");
        else ar.push(current);
        each.shift();
        single(each, ar);
    }
    return ar;
};

recurse(nums, []);