# Lab 4 Explore : DevTools Part 2 Answers

1. The bug was that the values being parsed into variables num1 and num2 were of String-type, and so the addition operation at line 11 was concatonating the strings num1 and num2 like so: "num1num2". From the watchlist, we can confirm that the data type of result was indeed String.
2. The fix should be to explicitly typecast the variables into Number-type before adding them to intialize the variable result. See fix.png