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
const { daySevenFunctions, File, Traverser } = require('./main')
const testFilepath = path.resolve(__dirname, 'testInput.txt')


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

describe('File tests', () => {

})

describe('Traverser tests', () => {

    test('Traverser instantiates with undefined values', () => {

        let traverser = new Traverser
        expect(traverser.workingDir).not.toBeTruthy()
        expect(traverser.files).not.toBeTruthy()        
    })

    describe('createFile', () => {

        let traverser = new Traverser
        traverser.createFile('/', 'dir', 0)
        traverser.createFile('abc.log', 'file', 1234)

        test('Traverser creates a new root file and sets workingDir if files property is undefined', () => {
            
            expect(traverser.files).toBeInstanceOf(File)
            expect(traverser.workingDir.name).toEqual('/')

        })
    
        test('Traverser creates file as a child if files property is defined but does not change workingDir', () => {

            expect(traverser.files.children['abc.log']).toBeInstanceOf(File)
            expect(traverser.workingDir.children['abc.log']).toBeInstanceOf(File)
            expect(traverser.workingDir.name).toEqual('/')
        })

        test('createFile sets filepath of new file properly', () => {

            expect(traverser.files.children['abc.log'].filepath).toEqual(['/', '/'])
        })

    })

    describe('changeDir', () => {

        test('changeDir navigates into children files, sets workingDir properly, and creates a file in the proper folder', () => {
            let traverser = new Traverser
            traverser.createFile('/', 'dir', 0)
            traverser.createFile('abc', 'dir', 0)
            traverser.changeDir('abc')
            traverser.createFile('123', 'dir', 0)

            expect(traverser.workingDir.name).toEqual('abc')
            expect(traverser.workingDir.children['123']).toBeTruthy()
            expect(traverser.files.children['abc'].children['123']).toBeTruthy()
        })

        test('changeDir navigates up one level properly and sets workingDir properly', () => {
            let traverser = new Traverser
            traverser.createFile('/', 'dir', 0)
            traverser.createFile('abc', 'dir', 0)
            traverser.changeDir('abc')
            traverser.changeDir('..')
            expect(traverser.workingDir.name).toEqual('/')
        })

    })

    describe('acceptInstruction', () => {

  

        test('if instruction is cd, Traverser moves down to proper directory', () => {
            let traverser = new Traverser
            traverser.createFile('/', 'dir', 0)
            traverser.createFile('abc', 'dir', 0)
            traverser.createFile('123', 'dir', 0)
            traverser.createFile('pie', 'dir', 0)
            traverser.changeDir('abc')
            traverser.createFile('foo', 'dir', 0)
            traverser.createFile('bar', 'dir', 0)
            traverser.createFile('fubar', 'dir', 0)

            traverser.acceptInstruction({
                command: ['cd', 'foo'],
                instructions: undefined
            })
            expect(traverser.workingDir.name).toEqual('foo')
        })
        test('if instruction is cd, Traverser moves up to proper directory', () => {

            let traverser = new Traverser
            traverser.createFile('/', 'dir', 0)
            traverser.createFile('abc', 'dir', 0)
            traverser.createFile('123', 'dir', 0)
            traverser.createFile('pie', 'dir', 0)
            traverser.changeDir('abc')
            traverser.createFile('foo', 'dir', 0)
            traverser.createFile('bar', 'dir', 0)
            traverser.createFile('fubar', 'dir', 0)   

            traverser.changeDir('foo')
            console.log(traverser.workingDir.filepath)
            traverser.acceptInstruction({
                command: ['cd', '..'],
                instructions: undefined
            })
            expect(traverser.workingDir.name).toEqual('abc')
        })

        test('if instruction is ls, acceptInstruction looks for child files and creates them if not existent', () => {

        })


    })

    



})