# # https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/python

# Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

# If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

# Examples
# "!!", "??"     -->  "Right"
# "!??", "?!!"   -->  "Left"
# "!?!!", "?!?"  -->  "Left"
# "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

# Solution:

def balance(left, right):
    weights = {}
    for balance_side in [left, right]:
        weights[balance_side] = 0
        for char in balance_side:
            if char == '!':
                weights[balance_side] += 2
            elif char == '?':
                weights[balance_side] +=3
    return 'Balance' if weights[left] == weights[right] else 'Left' if weights[left] > weights[right] else 'Right'

# Refactor/Retry 04/11/22:

def balance(left, right):
    count_left = (left.count('!') * 2) + (left.count('?') * 3)
    count_right = (right.count('!') * 2) + (right.count('?') * 3)
    return 'Left' if count_left > count_right else 'Balance' if count_left == count_right else 'Right'