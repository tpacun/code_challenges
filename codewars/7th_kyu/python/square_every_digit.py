# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

# Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

# Tests:
# import codewars_test as test
# from solution import square_digits

# @test.describe("Premade tests: ")
# def fixed_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(square_digits(9119), 811181)
#         test.assert_equals(square_digits(0), 0)

# Solution:

def square_digits(num):
    cc_string = ''
    num_string = str(num)
    for char in str(num_string):
        cc_string += str(int(char)**2)
    return int(cc_string)