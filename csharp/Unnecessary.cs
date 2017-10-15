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
            new Unnecessary(integer);
        }
        Console.ReadLine();
    }
}

public class Unnecessary
{
    
    private static int _number;
    
    Func<int, int> GetFizzBuzz = number => number % 3 == 0 ? 0 : number % 5 == 0 ? 1 : -1;
    
    public Unnecessary(int number)
    {
        _number = number;
        var fizzOrBuzzString = UnnecessaryDictionary()[GetFizzBuzz(_number)];

        Console.WriteLine(fizzOrBuzzString);
    }

    public Dictionary<int, string> UnnecessaryDictionary()
    {
        return new Dictionary<int, string>
        {
            [-1] = _number.ToString(),
            [0] = "Fizz",
            [1] = "Buzz"
        };
    }
}