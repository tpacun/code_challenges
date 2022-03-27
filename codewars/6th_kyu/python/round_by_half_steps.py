# https://www.codewars.com/kata/51f1342c76b586046800002a/train/python

# Round any given number to the closest 0.5 step

# I.E.

# solution(4.2) = 4
# solution(4.3) = 4.5
# solution(4.6) = 4.5
# solution(4.8) = 5
# Round up if number is as close to previous and next 0.5 steps.

# solution(4.75) == 5

# Solution: -knew there was a much easier solution but couldn't seem to come up with it...marking this to come back and review/refactor 

from decimal import *
def solution(n):
    if Decimal(n) % Decimal(.5) >= Decimal(.25):
        return float(Decimal(n) + (Decimal(.5) - Decimal(n) % Decimal(.5)))
    else:
        return float(Decimal(n) - Decimal(n) % Decimal(.5)
)