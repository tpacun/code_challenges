// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// Solution:

function hoopCount (n) {
    return n >= 10 ? 'Great, now move on to tricks':'Keep at it until you get it'
 }