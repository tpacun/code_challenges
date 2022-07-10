// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Solution:

function getSize(w, h, d) {
    return [2 * (h * w + d * h + w * d), w * h * d]
  }