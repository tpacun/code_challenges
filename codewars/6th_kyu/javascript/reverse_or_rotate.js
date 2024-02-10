// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// Solution:

function revrot(str, sz) {
    // Validation
    // If sz is <= 0 or is empty, return ''
    // If sz is greater than str, return ''
    if (sz <= 0 || str.length === 0 || (sz > str.length)) {
      return ''
    }
    
    // Cut string into chunks of size sz
    // Break string into array of strings of size sz
    // If array[length - 1].length is less than sz, drop it
    
    let strArrayChunks = []
    const numberSzIntoStrLength = (str.length / sz) >> 0
    
    for (i = 0; i < numberSzIntoStrLength; i ++) {
      const chunk = str.slice(i * sz, i * sz + sz)
      strArrayChunks.push(chunk)
    }  
    
    let strArrayChunksReturn = []
    // For loop for each x in array
    strArrayChunks.forEach((chunk) => {
      // Split x itself up into an array
      let chunkArray = chunk.split('')
      
      // Reduce (sum) it based upon each digit ** 3
      const chunkArrayAsInts = chunkArray.map((c) => parseInt(c) ** 3)
      const chunkArraySum = chunkArrayAsInts.reduce((a, b) => a + b)
  
      // if sum is divisible by 2 (sum % 2 === 0)....
      let newChunk;
      if (chunkArraySum % 2 === 0) {
        newChunk = chunkArray.reverse()     
        // reverse x array
      // else rotate it to the left (aka, drop index 0 and push on to array so it becomes last index)
      } else {
        const valueToPush = chunkArray.shift()
        chunkArray.push(valueToPush)
        newChunk = chunkArray
      }
      
      strArrayChunksReturn.push(...newChunk)
    })
    // combine new array back into single string
    // return string
    return strArrayChunksReturn.join('')
  }