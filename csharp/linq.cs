using System;
using System.Linq;
					
public class Program
{
	public static void Main()
	{
		Enumerable
			.Range(1,100)
			.Select(FizzBuzz.FromNumber)
			.ToList()
			.ForEach(Console.WriteLine);
	}
}
	
public class FizzBuzz
{
	private readonly int _number;
	private readonly string _fizzbuzz;
	
	public FizzBuzz(int number)
	{
		_number = number;
		_fizzbuzz = $"{(number % 3 == 0 ? "Fizz" : "")}{(number % 5 == 0 ? "Buzz" : "")}";
	}
	
	public override string ToString()
	{
		return string.IsNullOrEmpty(_fizzbuzz) ? _number.ToString() : _fizzbuzz;
	}
	
	public static FizzBuzz FromNumber(int number)
	{
		return new FizzBuzz(number);
	}
}
