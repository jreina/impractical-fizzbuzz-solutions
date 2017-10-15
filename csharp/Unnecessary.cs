using System;
using ShittyLINQ;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        var integers = Enumerable.Range(1, 100);

        foreach (var integer in integers)
        {
            Unnecessary.GetFizzBuzz(integer);
        }
        Console.ReadLine();
    }
}

public static class Unnecessary
{

    private static int _number;

    private static Func<int, int> CheckFizzBuzz = number => (number % 3 == 0 && number % 5 ==0) ? 0: number % 3 == 0 ? 1 : number % 5 == 0 ? 2 : -1;
    
    public static void GetFizzBuzz(int number)
    {
        _number = number;
        var fizzOrBuzzString = UnnecessaryDictionary()[CheckFizzBuzz(_number)];

        Console.WriteLine(fizzOrBuzzString);
    }

    private static Dictionary<int, string> UnnecessaryDictionary()
    {
        return new Dictionary<int, string>
        {
            [-1] = _number.ToString(),
            [0] = "FizzBuzz",
            [1] = "Fizz",
            [2] = "Buzz"
        };
    }
}