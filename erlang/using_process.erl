-module(using_process).

-export([start/0, stop/0, fizz_buzz/1]).


stop() ->
    fizz_buzz ! {self(), stop},
    receive
        {ok, shutting_down} ->
            {ok, "Process stopped."}
    after
        10000 ->
            {error, "Timed out waiting for process to stop!"}
    end.


fizz_buzz(Nums) ->
    fizz_buzz ! {self(), Nums},
    receive
        {ok, Result} ->
            Result;
        Error ->
            Error
    after
        10000 ->
            {error, "Timed out waiting for the results!"}
    end.


start() ->
    Pid = spawn(fun loop/0),
    register(fizz_buzz, Pid),
    ok.


loop() ->
    receive
        {Caller, Nums} when is_list(Nums) ->
            Caller ! {ok, run_fizz_buzz(Nums)},
            loop();
        {Caller, stop} ->
            Caller ! {ok, shutting_down};
        {Caller, Uknown} ->
            Caller ! {uknown_input, Uknown},
            loop();
        UknownMessage ->
            io:format("Throwing away uknown message structure: ~p~n", [UknownMessage]),
            loop()
    end.


run_fizz_buzz(Nums) ->
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