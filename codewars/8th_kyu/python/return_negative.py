# https://www.codewars.com/kata/55685cd7ad70877c23000102/train/python

# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# Examples
# make_negative(1);  # return -1
# make_negative(-5); # return -5
# make_negative(0);  # return 0
# Notes
# The number can be negative already, in which case no change is required.
# Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

# Tests:

# import codewars_test as test
# from solution import make_negative

# @test.describe("Fixed Tests")
# def basic_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(make_negative(42),-42)
#         test.assert_equals(make_negative(-9),-9)
#         test.assert_equals(make_negative(0),0)

# Solution:

def make_negative(number):
    if number < 0:
        return number
    else:
        new = number * -1
        return new