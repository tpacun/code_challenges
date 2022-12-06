// Part One

// mjqjpqmgbljsphdztnvjfqwrcgsmlb: first marker after character 7
// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11

// // Part Two

// mjqjpqmgbljsphdztnvjfqwrcgsmlb: first marker after character 19
// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 23
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 23
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 29
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 26

const functions = require('./main')

test('textToArray returns an array of given letters in string', () => {
    expect(functions.textToArray('string')).toEqual(['s','t','r','i','n','g'])
})

test('getSolution returns the first character after which a sequence of the selected number of unique letters appears', () => {
    expect(functions.getSolution('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7) 
    expect(functions.getSolution('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5)
    expect(functions.getSolution('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6)
    expect(functions.getSolution('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10)
    expect(functions.getSolution('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11)


    expect(functions.getSolution('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19)
    expect(functions.getSolution('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23)
    expect(functions.getSolution('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23)
    expect(functions.getSolution('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29)
    expect(functions.getSolution('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26)


})