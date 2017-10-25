// fizzbuzz for arbitrarily large numbers
//
// JavaScript has one numeric type: double-precision floating point.
// A Number-based fizzbuzz solution simply won't work above MAX_SAFE_INTEGER
// (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).
// 
// Until the BigInt proposal (https://github.com/tc39/proposal-bigint) lands, we may
// as well roll our own arbitrary precision integer representation.
//
// We'll split the number up by place, reverse it, and store it in an array. The ones place
// goes at i = 0, the tens place at i = 1, the hundreds place at i = 2, and so on,
// e.g. 123 = [3, 2, 1].
// We reverse the number in part because it's mathematically pretty...
// 123 = (3 * 10 ** 0) + (2 * 10 ** 1) + (1 * 10 ** 2)  
// ...but we reverse it mostly because it makes the carry() implementation shorter.

// Of course, instead of base 10, we'll work in base 15 for, uh, the user's convenience.
// Yeah, that's why.
const BASE = 15;

// "123" -> [3, 2, 1]
function bigInteger(s) {
  return s.split('').reverse().map(group => parseInt(group, BASE))
}

// [3, 2, 1] -> "123"
function format(v) {
  return v.slice().reverse().map(group => group.toString(BASE)).join('')
}

// this function finds place-groups that are too big and carries them to the next
// place-group. If we were working in base 10, it would go something like this:
// [10, 9, 2] -> [0, 0, 3]
function carry(v) {
  for (let i = 0; i < v.length; i++) {
	const quotient = Math.floor(v[i] / BASE);
	if (quotient > 0) {
	  v[i + 1] += quotient;
	}
	
    v[i] = v[i] % BASE;
  }
}

function inc(v) {
  v[0]++;
  carry(v);
}

function equal(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  
  return true;
}

function mod3(v) {
  return v[0] % 3;
}

function mod5(v) {
  return v[0] % 5;
}

function mod15(v) {
  return v[0];
}

function fizzbuzz() {
  // Numbers in JavaScript lose precision above 9,007,199,254,740,991 base 10.
  // Let's start a bit above that. Say, 50,000,000,000,001 base 15.
  for(let i = bigInteger("50000000000001"); !equal(i, bigInteger("5000000000006b")); inc(i)) {
    if (mod15(i) === 0) {
      console.log('fizzbuzz');
    } else if (mod3(i) === 0) {
      console.log('fizz');
    } else if (mod5(i) === 0) {
      console.log('buzz');
    } else {
      console.log(format(i));
    }
  }
}