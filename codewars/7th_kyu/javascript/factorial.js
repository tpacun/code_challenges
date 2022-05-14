// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

// Solution:

function factorial(n)
{
  if (n < 0 || n > 12) {
    throw new RangeError()
  }
  else {
    let total = 1;
    for (i = n; i > 1; i--) {
      total *= i
      }
    return total
  }
}