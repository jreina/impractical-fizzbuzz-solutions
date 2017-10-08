function fizzBuzz(start, end){
    // base case
    if(start == 0){
        console.log(end-start);
        return 0;
    }

    // recursive case
    if((end - start) % 15 == 0){
        console.log("Fizzbuzz");
    } else if((end - start) % 5 == 0){
        console.log("Buzz");
    } else if((end - start) % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(end-start);
    }
    fizzBuzz(start-1,end);
}

fizzBuzz(99,100);