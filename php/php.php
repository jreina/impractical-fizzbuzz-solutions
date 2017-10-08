<?php
/**
fizbuzz.php
An example of how you should NOT solve the fizzbuzz problem
 **/

error_reporting(0);

function fizbuzz() {
	for ($i = 1; $i <= 100; $i++) {
		//echo $i;
		if ($i%3 == 0) {
			$fizzBuzzAnswer[$i] = "Fizz";
			$hasFizzBuzz        = 1;
		}
		if ($i%5 == 0) {
			$fizzBuzzAnswer[$i] .= "Buzz";
			$hasFizzBuzz = 1;
		}

		if ($hasFizzBuzz == 0) {
			$fizzBuzzAnswer[$i] = "#";
		}

		$hasFizzBuzz = 0;
	}

	foreach ($fizzBuzzAnswer as $number => $response) {
		if ($response == "#") {
			echo $number;
		} else {
			echo $number."-".$response;
		}
		echo "\n";
	}
}

fizbuzz();