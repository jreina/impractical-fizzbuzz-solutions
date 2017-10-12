isA num message val = if mod val num == 0 then message else ""
fizzBuzz x = isA 3 "Fizz" x ++ isA 5 "Buzz" x
pairs xs = [ (x, fizzBuzz x) | x <- xs]
justMessage (a, b) = if length b == 0 then show a else b
fizzBuzzes xs = [ justMessage x | x <- pairs xs ]
main = print $ fizzBuzzes [1..100]
