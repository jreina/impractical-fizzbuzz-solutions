function ternaryMadness(nums) {
    var result = [];

    nums.forEach(function (num) {
        result.push(
            (num % 15 === 0 && 'FizzBuzz') || (num % 3 === 0 && 'Fizz') || (num % 5 === 0 && 'Buzz') || num
        );
    });

    return result;
}


// Only test code below this point.

function assertEqual(expected, actual) {
    var allEqual = expected.length === actual.length && expected.every(function (expectedValue, index) {
        return expectedValue === actual[index];
    });
    if (!allEqual) {
        throw new Error(
            'AssertionError! expected Array(' + expected.length + '): ' + expected
            + ', but was Array(' + actual.length + '): ' + actual
        );
    }
}

var input = new Array(15).fill(0).map(function (value, index) {
    return index + 1;
});

var expected = [
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz'
];

assertEqual(expected, ternaryMadness(input));

console.log('All Tests Passed');
