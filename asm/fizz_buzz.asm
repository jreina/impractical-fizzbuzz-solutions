section .data

  fizz_msg db "Fizz"
  fizz_len equ $ - fizz_msg

  buzz_msg db "Buzz"
  buzz_len equ $ - buzz_msg

  new_line db 0xA

section .text
  global _start

  _start:
    mov ebp, esp
    mov dword [ebp - 4], 1
    mov byte [ebp - 5], 0

    check_fizz:
      mov eax, [ebp - 4]
      mov ebx, 3
      cdq
      div ebx

      test edx, edx
      jne check_buzz

      mov byte [ebp - 5], 1

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
      jne check_num

      mov byte [ebp - 5], 1

      mov eax, 4
      mov ebx, 1
      mov ecx, buzz_msg
      mov edx, buzz_len
      int 0x80

    check_num:
      cmp byte [ebp - 5], 1
      jne continue

    continue:
      mov eax, [ebp - 4]
      add eax, 1

      cmp eax, 101
      je exit

      mov dword [ebp - 4], eax
      mov byte [ebp - 5], 0

      mov eax, 4
      mov ebx, 1
      mov ecx, new_line
      mov edx, 0x2
      int 0x80

      jmp check_fizz

    exit:
      mov eax, 1
      mov ebx, 0
      int 0x80
