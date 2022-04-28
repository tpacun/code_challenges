# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python

# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F

# Solution:

def abbrev_name(name):
    nameArray = name.split()
    return f'{nameArray[0][0].upper()}.{nameArray[1][0].upper()}'