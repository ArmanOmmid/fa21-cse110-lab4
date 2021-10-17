# Lab 4 Expose : Part 1 Answers:

1. Line 9 prints "values added: 20"
2. Line 13 prints "final: 20"
3. Line 9 prints "values added: 20"
4. Causes an error because variable "result" is of "let"-type and therefore cannot be accessed outside the block scope it is defined in, which is what line 13 attempts to do.
5. Causes an error because variable "result" is of "const"-type and therefore cannot be reassigned after initialization, which is line 7 attempts to do preceeding line 9.
6. Causes an error because variable "result" is of "const"-type and therefore cannot be reassigned after initialization, which is line 7 attempts to do preceeding line 13... but even if this were not the case, "const"-type variables cannot be accessed outside the block scope it is defined in, which is what line 13 attempts to do and so would still cause an error.
