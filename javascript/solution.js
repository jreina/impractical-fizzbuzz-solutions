function fizzBuzz(start, end){
2
    // base case
3
    if(start == 0){
4
        console.log(end-start);
5
        return 0;
6
    }
7
8
    // recursive case
9
    if((end - start) % 15 == 0){
10
        console.log("Fizzbuzz");
11
    } else if((end - start) % 5 == 0){
12
        console.log("Buzz");
13
    } else if((end - start) % 3 == 0){
14
        console.log("Fizz");
15
    } else {
16
        console.log(end-start);
17
    }
18
    fizzBuzz(start-1,end);
19
}
20
21
fizzBuzz(99,100);