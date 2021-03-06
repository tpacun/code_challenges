# https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python

# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expanded_form(12) # Should return '10 + 2'
# expanded_form(42) # Should return '40 + 2'
# expanded_form(70304) # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

# Solution

def expanded_form(num):
    num = list(str(num))
    long = ''
    for char, index in zip(num, range(len(num))):
        if char == '0':
            continue
        if len(long) == 0:
            long = char + "{}".format('0' * (len(num) - (index+1)))
        else:
            long += ' + ' + char + "{}".format('0' * (len(num) - (index+1)))
    return long