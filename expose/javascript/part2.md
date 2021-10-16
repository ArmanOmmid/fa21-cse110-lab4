# Lab 4 Part 2 Answers:

1. Line 12 will effectively output the length of the "prices" parameter to the console. This is because the value of "i" is incremented exactly as many times as the length of variable "prices". As a "var"-type variable, it is in scope as it is in the same function-scope as its initialization so it is accessible.
2. Line 13 will output the price of the last element of the "prices" parameter after being discounted to the console. This is because the value of "discountedPrice" will be set to its last previous assignment which happens in the preceeding for-loop that most recently assigns it to be the price of the last element of the "prices" parameter after being discounted. As a "var"-type variable, it is in scope as it is in the same function-scope as its initialization so it is accessible.
3. Line 14 will output the price of the last element of the "prices" parameter after being discounted and then rounded to an integer value to the console. This is because the value of "finalPrice" will be set to its last previous assignment which happens in the preceeding for-loop that most recently assigns it to be the price of the last element of the "prices" parameter after being discounted and then rounded to an integer value. As a "var"-type variable, it is in scope as it is in the same function-scope as its initialization so it is accessible.
4. This function returns an array of integers values that have been discounted and rounded to integers from their original inputs. Every element in "prices" will be discounted by "discount" and the new value will be put in the corresponding index of the new array to be returned. As a "var"-type variable, it is in scope as it is in the same function-scope as its initialization so it is accessible.
5. Causes an error because variable "i" is of "let"-type and therefore cannot be accessed outside the block scope it is defined in, which is what line 12 attempts to do.
6. Causes an error because variable "discountedPrice" is of "let"-type and therefore cannot be accessed outside the block scope it is defined in, which is what line 13 attempts to do.
7. Line 14 will output the price of the last element of the "prices" parameter after being discounted and then rounded to an integer value to the console. This is because the value of "finalPrice" will be set to its last previous assignment which happens in the preceeding for-loop that most recently assigns it to be the price of the last element of the "prices" parameter after being discounted and then rounded to an integer value. As a "let"-type variable, it is in scope as it is in the same block-scope as its initialization so it is accessible.
8. This function returns an array of integers values that have been discounted and rounded to integers from their original inputs. Every element in "prices" will be discounted by "discount" and the new value will be put in the corresponding index of the new array to be returned. As a "let"-type variable, it is in scope as it is in the same block-scope as its initialization so it is accessible.
9. Causes an error because variable "i" is of "let"-type and therefore cannot be accessed outside the block scope it is defined in, which is what line 11 attempts to do.
10. Line 11 will output the length of the "prices" parameter to the console. This is because the value of "length" is assigned as "price.length". As a "const"-type variable, it is in scope as it is in the same function-scope as its initialization so it is accessible.
11.  This function returns an array of integers values that have been discounted and rounded to integers from their original inputs. Every element in "prices" will be discounted by "discount" and the new value will be put in the corresponding index of the new array to be returned. As a "const"-type variable, it is in scope as it is in the same block-scope as its initialization so it is accessible. While it is "const"-type, it is not immutable- only un-reassignable.
12. Data Types:
    - A) student.name
    - B) student['Grad Year']
    - C) student.greeting()
    - D) student['Favorite Teacher'].name
    - E) student.courseLoad[0]
13. Arithmetic Operators
    - A) '32' ; "+" operator on a string and a number resolves to the string operation for concatonation. 2 is typecasted from number to string: '2'.
    - B) 1 ; "-" operator on a string and a number resolves to the arithmetic operator for subtraction. '3' is typecasted from string to number: 3.
    - C) 3 ; "+" operator on a number and null resolves to the arithmetic operator for addition. null is typecasted from null to number: 0.
    - D) '3null' ; "+" operator on a string and null resolves to the string operator for concatonation. null is typecasted from null to string: 'null'.
    - E) 4 ; "+" operator on a number and a boolean resolves to the arithmetic operator for addition. true is typecasted from boolean to number: 1.
    - F) 0 ; "+" operator on a boolean and null resolves to the arithmetic operator for addition. Both false and null are typecasted from from boolean and null (respectively) to number: 0 and 0.
    - E) '3undefined' ; "+" operator on a string and undefined resolves to the string operator for concatonation. undefined is typecasted from undefined to string: 'undefined'.
    - G) NaN ; "-" operator on a string and undefined resolves to the arithmetic operator for subtraction. '3'' is typecasted from string to number: 3. Meanwhile, undefined is typecasted from undefined to number: NaN. 3 - NaN = NaN.
14. Comparison Operators
    - A) true ; '2' is typecasted from string to number for numerical comparison with number 1. 2 > 1 is true.
    - B) false ; comparison of two strings uses string comparison. Comparing the first characters of the strings: '2' < '1' is false.
    - C) true ; loose equality between 2 and '2' typecasts string '2' to number 2. 2 == 2 is true.
    - D) false ; strict equality between different types will always return false. 2 and '2' are of types number and string respectively. 
    - E) false ; loose equality between true and 2 typecasts true from boolean to number 1. 1 == 2 is false;
    - F) true ; Boolean(2) is an explicit typecast that evaluates to true. Strict equality between true and true is true as they are the same type and value.
15. The difference between '==' and '===' is that '==' is has a loose sense of equality that considers implicit type conversions when types are different. Meanwhile, '===' has a strict sense of equality where the types and value must be equal and does not perform imlpicit type coinversions. 
16. 