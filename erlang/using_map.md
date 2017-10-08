# Using Map
A  solution to the FizzBuzz problem in Erlang using map (this is a fairly good solution imo).

## Cons
 - It's written in Erlang and noone knows Erlang?

## Pros
 - Simplicity
 - You don't have to manage the list index
 - You don't have to reverse the list at the end

## What the hell is wrong with you?
Lots of things...

## Running the tests

Rather than setting up a project structure to use rebar, I just wrote the module and tests in the same directory.  You can either run them in the erlang shell, or on the command line:

### Erlang Shell

```
$ erl
Erlang/OTP 20 [erts-9.0.4] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Eshell V9.0.4  (abort with ^G)
1> c(using_map), c(using_map_tests), eunit:test(using_map_tests).
  All 9 tests passed.
ok
2> q().
ok
3> $
```

### Linux Shell
```
$ erlc using_map.erl && erlc using_map_tests.erl && erl -noshell -s eunit test using_map_tests -s init stop
  All 9 tests passed.
$
```
