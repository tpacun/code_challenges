// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Solution:

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
  }