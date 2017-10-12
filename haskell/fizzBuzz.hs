isA num message val = if mod val num == 0 then message else ""
fizzBuzz x = isA 3 "Fizz" x ++ isA 5 "Buzz" x
fizzBuzzes xs = [ (x, fizzBuzz x) | x <- xs]
main = print $ fizzBuzzes [1..100]
