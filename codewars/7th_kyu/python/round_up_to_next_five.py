# https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/python

# Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

# Examples:

# input:    output:
# 0    ->   0
# 2    ->   5
# 3    ->   5
# 12   ->   15
# 21   ->   25
# 30   ->   30
# -2   ->   0
# -5   ->   -5
# etc.
# Input may be any positive or negative integer (including 0).

# You can assume that all inputs are valid integers.

# Solution:

def round_to_next5(n):
    # Your code here
    if n % 5 == 0:
        return n
    else:
        for x in range(n, n+5):
            if x % 5 == 0:
                return x