// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1.

// Solution:

function index(array, n){
  return array[n] ? array[n] ** n:-1  
}