# https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# For example:

# time = 3 ----> litres = 1

# time = 6.7---> litres = 3

# time = 11.8--> litres = 5

# Solution:

def litres(time):
    return int(time / 2)