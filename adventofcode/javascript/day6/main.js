// To fix the communication system, you need to add a subroutine to the device that detects a start-of-packet marker in the datastream. In the protocol being used by the Elves, the start of a packet is indicated by a sequence of four characters that are all different.

// The device will send your subroutine a datastream buffer (your puzzle input); your subroutine needs to identify the first position where the four most recently received characters were all different. Specifically, it needs to report the number of characters from the beginning of the buffer to the end of the first such four-character marker.

// For example, suppose you receive the following datastream buffer:

// mjqjpqmgbljsphdztnvjfqwrcgsmlb
// After the first three characters (mjq) have been received, there haven't been enough characters received yet to find the marker. The first time a marker could occur is after the fourth character is received, making the most recent four characters mjqj. Because j is repeated, this isn't a marker.

// The first time a marker appears is after the seventh character arrives. Once it does, the last four characters received are jpqm, which are all different. In this case, your subroutine should report the value 7, because the first start-of-packet marker is complete after 7 characters have been processed.

// How many characters need to be processed before the first start-of-packet marker is detected?

const functions = {
    textToArray: function(string) {
        let result = string.split('')
        return result
    },
    getSolution(string, num) {
        let result = 0;
        const inputArray = this.textToArray(string)
        inputArray.every((c, i, arr) => {
            let checkArray = arr.slice(i, i + num)
            let uniques = [...new Set(checkArray)]
            if (uniques.length == num) {
                result = i + num
                return false
            }
            return true;
        })
        return result
    }
}

module.exports = functions