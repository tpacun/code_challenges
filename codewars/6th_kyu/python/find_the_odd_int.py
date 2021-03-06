# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

# Solution - ugly:

def find_it(seq):
    dictionary_keys = list(set(seq))
    dictionary_count = {}
    for i in dictionary_keys:
        dictionary_count[i] = 0
    for num in seq:
        dictionary_count[num] += 1
    for num in dictionary_count:
        if dictionary_count[num] % 2 == 1:
            return num

# Refactor v2 - much cleaner solution

def find_it(seq):
    for x in seq:
        if seq.count(x) % 2 == 1:
            return x