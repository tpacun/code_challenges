// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// Solution:

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return pontoonDistance / youSpeed > sharkDistance / (sharkSpeed * (dolphin? 0.5:1)) ? 'Shark Bait!':'Alive!'
  }