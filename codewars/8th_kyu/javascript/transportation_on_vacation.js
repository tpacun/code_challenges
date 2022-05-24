// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// Solution:

function rentalCarCost(d) {
    return d > 6 ? d * 40 - 50:d > 2 ? d * 40 - 20:d * 40 
  }