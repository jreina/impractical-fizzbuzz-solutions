# Divide and Conquer
Break a big fizz down into smaller fizzes. This solution takes a list of numbers
1 through 100, breaks it into two smaller lists, and solves the fizzbuzz problem
for each of those lists separately. At the end, all of the smaller lists are
reassembled.

## Pros
 - Solves the fizzbuzz problem for a single element at a time.

## Cons
 - Needs to instantiates log n arrays to arrive at a solution.

## What the hell is wrong with you?
100, 50, or even two elements are too many to consider at once.
