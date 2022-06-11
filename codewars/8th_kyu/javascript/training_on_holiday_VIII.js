// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

// Solution:

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount * .01)))
  }