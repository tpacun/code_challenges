# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

# Convert number to reversed array of digits
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Example:
# 348597 => [7,9,5,8,4,3]
# 0 => [0]

# Solution:

def digitize(n):
    lth = str(n)
    ans = []
    for i in reversed(range(len(lth))):
        ans.append(int(lth[i]))
    return ans

# Refactor Needed