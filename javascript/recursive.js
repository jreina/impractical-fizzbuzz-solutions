function recursive(nums) {
    return recursiveHelper(nums, 0, []);
}

/**
 * I chose to use a helper function instead of checking falsy on my parameters
 * every call and having to default them on that first call.
 */
function recursiveHelper(nums, index, accumulator) {

    if (index >= nums.length) {
        return accumulator;
    }

    var num = nums[index];

    if (num % 15 === 0) {
        accumulator.push('FizzBuzz');
    } else if (num % 3 === 0) {
        accumulator.push('Fizz');
    } else if (num % 5 === 0) {
        accumulator.push('Buzz');
    } else {
        accumulator.push(num);
    }

    return recursiveHelper(nums, index + 1, accumulator);
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

assertEqual(expected, recursive(input));

console.log('All Tests Passed');
