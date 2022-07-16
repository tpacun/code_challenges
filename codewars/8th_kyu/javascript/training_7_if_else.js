// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

// Solution:

function saleHotdogs(n){
    return n < 5 ? n * 100:n < 10 ? n * 95:n * 90
  }