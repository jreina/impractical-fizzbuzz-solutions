# Using Process
A  solution to the FizzBuzz problem in Erlang using an Erlang process.

## Cons
 - It's written in Erlang and noone knows Erlang?
 - Seems a little convoluted for such a simple task :)

## Pros
 - It's a step towards writing a scalable FizzBuzz service!

## What the hell is wrong with you?
Lots of things...

## Running the tests

Rather than setting up a project structure to use rebar, I just wrote the module and tests in the same directory.  You can either run them in the erlang shell, or on the command line:

### Erlang Shell

```
$ erl
Erlang/OTP 20 [erts-9.0.4] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Eshell V9.0.4  (abort with ^G)
1> c(using_process), c(using_process_tests), eunit:test(using_process_tests).
  All 9 tests passed.
ok
2> q().
ok
3> $
```

### Linux Shell
```
$ erlc using_process.erl && erlc using_process_tests.erl && erl -noshell -s eunit test using_process_tests -s init stop
  All 9 tests passed.
$
```
