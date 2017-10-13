section .data
  fizzbuzz_msg db "FizzBuzz", 0xA
  fizzbuzz_len equ $ - fizzbuzz_msg

  fizz_msg db "Fizz", 0xA
  fizz_len equ $ - fizz_msg

  buzz_msg db "Buzz", 0xA
  buzz_len equ $ - buzz_msg

section .text
  global _start

  _start:
    mov ebp, esp
    mov dword [ebp - 4], 1

  check_fizzbuzz:
    mov eax, [ebp - 4]
    mov ebx, 15
    cdq
    idiv ebx

    test edx, edx
    jne check_fizz

    mov eax, 4
    mov ebx, 1
    mov ecx, fizzbuzz_msg
    mov edx, fizzbuzz_len
    int 0x80

  check_fizz:
    mov eax, [ebp - 4]
    mov ebx, 3
    cdq
    div ebx

    test edx, edx
    jne check_buzz

    mov eax, 4
    mov ebx, 1
    mov ecx, fizz_msg
    mov edx, fizz_len
    int 0x80

  check_buzz:
    mov eax, [ebp - 4]
    mov ebx, 5
    cdq
    div ebx

    test edx, edx
    jne continue

    mov eax, 4
    mov ebx, 1
    mov ecx, buzz_msg
    mov edx, buzz_len
    int 0x80

  continue:
    mov eax, [ebp - 4]
    add eax, 1
    cmp eax, 101
    je exit
    mov dword [ebp - 4], eax
    jmp check_fizzbuzz

  exit:
    mov eax, 1
    mov ebx, 0
    int 0x80
