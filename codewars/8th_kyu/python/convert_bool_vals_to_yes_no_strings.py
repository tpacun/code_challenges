# https://www.codewars.com/kata/53369039d7ab3ac506000467/train/python

# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# Solution:

def bool_to_word(boolean):
    if boolean == True:
        return 'Yes'
    if boolean == False:
        return 'No'

# Refactor v2:

def bool_to_word_v2(boolean):
    return 'Yes' if boolean == True else 'No'

# Refactor v3:

def bool_to_word_v3(boolean):
    return 'Yes' if boolean else 'No'