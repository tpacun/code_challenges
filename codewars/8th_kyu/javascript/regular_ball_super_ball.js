// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// Solution: 

class Ball{
    constructor(ballType) {
      this.ballType = ballType || 'regular'
    }
  }