-module(using_map).

-export([fizz_buzz/1]).


fizz_buzz(Nums) ->
    lists:map(fun do_fizz_buzz/1, Nums).


do_fizz_buzz(Num) ->
    case Num rem 15 of
        0 ->
            "FizzBuzz";
        _ ->
            case Num rem 3 of
                0 ->
                    "Fizz";
                _ ->
                    case Num rem 5 of
                        0 ->
                            "Buzz";
                        _ ->
                            Num
                    end
            end
    end.
