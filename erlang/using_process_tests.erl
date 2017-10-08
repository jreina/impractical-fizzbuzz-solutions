-module(using_process_tests).

-include_lib("eunit/include/eunit.hrl").


fizz_buzz_test_() ->
    {
        setup,
        fun test_setup/0,
        fun test_teardown/1,
        [
            {"Should return 1 for 1", fun one/0},
            {"Should return 2 for 2", fun two/0},
            {"Should return Fizz for 3", fun three/0},
            {"Should return 4 for 4", fun four/0},
            {"Should return Buzz for 5", fun five/0},
            {"Should return Buzz for 10", fun ten/0},
            {"Should return Fizz for 12", fun twelve/0},
            {"Should return FizzBuzz for 15", fun fifteen/0},
            {"Should handle multiple numbers", fun multiple/0}
        ]
    }.


test_setup() ->
    using_process:start().

test_teardown(_) ->
    using_process:stop().


one() ->
    Input = [1],
    Expected = [1],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

two() ->
    Input = [2],
    Expected = [2],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

three() ->
    Input = [3],
    Expected = ["Fizz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

four() ->
    Input = [4],
    Expected = [4],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

five() ->
    Input = [5],
    Expected = ["Buzz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

ten() ->
    Input = [10],
    Expected = ["Buzz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

twelve() ->
    Input = [12],
    Expected = ["Fizz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

fifteen() ->
    Input = [15],
    Expected = ["FizzBuzz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).

multiple() ->
    Input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    Expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"],
    Actual = using_process:fizz_buzz(Input),
    ?assertEqual(Expected, Actual).
