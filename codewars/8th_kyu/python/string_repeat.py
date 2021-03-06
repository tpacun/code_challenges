# https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

# Solution:

def repeat_str(repeat, string):
    repeated = ''
    for x in range(0, repeat):
        repeated += string
    return repeated

#Refactor v2

def repeat_str_v2(repeat, string):
    return string * repeat