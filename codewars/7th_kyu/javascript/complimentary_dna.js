// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// Solution:

function DNAStrand(dna){
    let ret_str = '';
    for(let char of dna) {
      switch(char) {
          case 'A':
            ret_str += 'T'
            break
          case 'T':
            ret_str += 'A'
            break
          case 'G':
            ret_str += 'C'
            break
          case 'C':
            ret_str += 'G'
            break
      }
    }
    return ret_str
  }