// Input:

// $ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k

// Visual Representation:

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

// The total size of directory e is 584 because it contains a single file i of size 584 and no other directories.
// The directory a has total size 94853 because it contains files f (size 29116), g (size 2557), and h.lst (size 62596), plus file i indirectly (a contains e which contains i).
// Directory d has total size 24933642.
// As the outermost directory, / contains every file. Its total size is 48381165, the sum of the size of every file.
// To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes. In the example above, these directories are a and e; the sum of their total sizes is 95437 (94853 + 584). (As in this example, this process can count files more than once!)

// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

const path = require('path')
const { daySevenFunctions} = require('./main')
const testFilepath = path.resolve(__dirname, 'testInput.txt')

describe('File class', () => {

    let home = new File('/', 'dir')

    test('createChildFile creates new child File in children property', () => {
        home.createChildFile('abc', 'dir', 0)
        expect(home.children.abc).toBeTruthy()
        expect(home.children.abc.parent).toBe(home.name)
    })
})

describe('Traverser class', () => {

    describe('Traverser changeDir', () => {

        let traverser = new Traverser('/')
        traverser.files.createChildFile('abc', 'dir')

        test('traverser creates correct working directory name', () => {
            expect(traverser.workingDir['name']).toEqual('/')
        })

        test('traverser changes to new directories correctly', () => {
            traverser.changeDir('abc')
            expect(traverser.workingDir['name']).toEqual('abc')
        })

        test('traverser makes a new child file in second level directory', () => {
            traverser.changeDir('123')
            expect(traverser.workingDir['name']).toEqual('123')
        })

        test('traverser moves up directory level correctly', () => {
            traverser.changeDir('..')
            expect(traverser.workingDir).toEqual('abc')
        })
    })

    // describe('traverser get working directory', () => {
    //     let traverser = new Traverser('/')
    //     traverser.changeDir('abc')
        
    //     expect(traverser.getWorkingDir()).toEqual()

    // })

    describe('Traverser executeInstruction', () => {
        let traverser = new Traverser('/')
        traverser.files.createChildFile('abc', 'dir')

        test('executes an ls', () => {
            traverser.executeInstruction({
                command: 'ls',
                responses: [['dir', 'dirname'], ['13242', 'filename.asdf']]
            })

            expect(traverser.files.children['dir']).toBeTruthy()
            expect(traverser.files.children['dir'].size).toBe
            expect(traverser.files.children['filename.asdf']).toBeTruthy()
            expect(traverser.files.children['filename.asdf'].size).toBe(13242)

        })

        test('executes a cd', () => {
            traverser.executeInstruction({
                command: 'cd def',
                responses: undefined
            })
            expect(traverser.workingDir).toEqual(['/', 'def'])
            expect(traverser.files.children['def']).toBeTruthy()

        })

        test('Does not execute garbled command', () => {

        })

    })
})

test('importText returns a string', () => {
    let result = daySevenFunctions.importText(testFilepath)
    expect(typeof(result)).toBe('string')
})

describe("Text parsing", () => {

    let importedText = daySevenFunctions.importText(testFilepath)
    let result = daySevenFunctions.parseText(importedText)
    test('parseText returns an object', () => {
        expect(typeof(result)).toBe('object')
    })

    test('parseText returns the correct number of command and responses', () => {
        expect(result.length).toBe(10)
    })

    test('parseText handles empty strings/commands by removing them', () => {
        expect(result).not.toContain('')
    })

    test('parseText returns each command and responses separated as properties of an object', () => {
        result.forEach((element) => {
            expect(typeof(element)).toBe('object')
            expect(element).toHaveProperty('command')
            expect(element).toHaveProperty('responses')
        })
    })
})