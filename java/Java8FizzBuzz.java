package com.sample.demo;


import java.util.stream.IntStream;

/*
 * Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print “Fizz” instead of the number and 
 * for the multiples of five print “Buzz”. For numbers which are 
 * multiples of both three and five print “Java8FizzBuzz
 * */

public class Java8FizzBuzz {

	/*
	 * Java 8 
	 * */
	public static void main(String[] args) {
		IntStream.range(1,100).forEach(i -> {
			String s  = "";
			s = i % 3 == 0 ? "Fizz " : "";
			s += i % 5 == 0 ? "Buzz " : "";
			if(!s.isEmpty()) System.out.println(s);
		});
	}
}
