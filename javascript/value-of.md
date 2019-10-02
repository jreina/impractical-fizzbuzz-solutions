# Value Of
The goal of this code is to solve fizzbuzz without obviously incrementing anything inside the `for` loop.

### How does it work?
There's a hidden count of the number of times `i.valueOf()` has been invoked. The JavaScript engine implicitly invokes `i.valueOf()` on each less-than and modulo operation. `i` is carefully crafted to expect eight comparisons each time through the loop.

### Why four `if` statements and zero `else if`?
With else-if, I would have gotten a different number of comparisons each time through the loop. In a normal solution

```
if (i % 15 === 0) {
  console.log('fizzbuzz')
} else if (i % 3 === 0) {
  console.log('fizz')
} else if (i % 5 === 0) {
  console.log('buzz')
} else {
  console.log(i)
}
```

there's one comparison on 15, two comparisons on 3, and three comparisons on 5. That means division isn't good enough to figure out the number of times through the loop. There would need to be practically a whole fizzbuzz implementation inside `i.valueOf()`.

### Why not put the fizzes and buzzes in `i.toString()`?
The `for` loop would be boring.

### Why & instead of &&?
`&&` short-circuits, causing the same comparison counting problem. `(i % 3 === 0) && (i % 15 !== 0)` yields one comparison when `i === 2`, and two comparisons when `i === 3`. With the bitwise `&`, it's always two comparisons.

## Pros
- None that I can think of.

## Cons
- The `if` statements are all fragile.
- Very strange behavior of `i`, such that `i == i + 1` sometimes.

## What the hell is wrong with you?
I really wanted to write this line: `for (; i < 100 ;) {`
