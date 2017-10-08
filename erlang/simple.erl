-module(simple).

-export([fizz_buzz/1]).


fizz_buzz(Nums) ->
    lists:reverse(fizz_buzz(Nums, 0, [])).


fizz_buzz([], _Index, Accumulator) ->
    Accumulator;
fizz_buzz(Nums, Index, Accumulator) ->
    [Head | Tail] = Nums,
    NextResult = case Head rem 15 of
        0 ->
            "FizzBuzz";
        _ ->
            case Head rem 3 of
                0 ->
                    "Fizz";
                _ ->
                    case Head rem 5 of
                        0 ->
                            "Buzz";
                        _ ->
                            Head
                    end
            end
    end,
    fizz_buzz(Tail, Index + 1, [NextResult | Accumulator]).
