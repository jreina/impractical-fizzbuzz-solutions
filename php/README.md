# innefficient

A solution to FizBuzz problem using all your knowledge about PHP (NOT). 

I have seen this code once in a coding interview (I have changed some variable names , though) and that was scary. The person who did this claimed a 'senior php developer'.

Well, enough talk. See for yourself (running through cli ``php -f php.php``). At your own risk.

## Pros
 - Well, it works.

## Cons
 - It has a ``error_reporting(0)`` at the beginning of the file. To hide some warnings (and bad coding);
 - The ``$hasFizBuzz`` var is a craziness; 
 - It uses an ``array`` and a ``foreach`` to render the results;
 - When you try it using a different interval (1-100000), this algorithm will eat a bunch of your RAM.


