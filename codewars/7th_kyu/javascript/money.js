// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

// He wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00

// Solution:

function calculateYears(principal, interest, tax, desired) {
    let y = 0;
    while (desired > principal) {
      principal = principal * (1 + interest) - principal * interest * tax
      y ++
    }
    return y
  }

  // Refactor v2

  function calculateYears(principal, interest, tax, desired) {
    let y = 0;
    while (desired > principal) {
      principal = principal * (1 + interest) - principal * interest * tax
      y ++
    }
    return y
  }