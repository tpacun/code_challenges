const fs = require('fs')

class File {
    constructor(name, filetype, size = 0, parent) {
        this.name = name;
        this.filetype = filetype;
        this.size = size;
        this.parent = parent
        this.children = {}
        }

    createChildFile(name, filetype, size) {
        this.children[name] = new File(name, filetype, size, this.name)
    }
}

class Traverser {
    constructor(fileStructName) {
        this.files = new File(fileStructName, 'dir', 0, undefined)
        this.workingDir = this.files
    }

    changeDir(newDir) {
        if (newDir === '..') {
            this.workingDir = this.
        } else {
            if (!this.files.children[newDir]) {
                this.workingDir.createChildFile(newDir, 'dir', 0)
            }
            this.workingDir = this.workingDir.children[newDir]
        }
    }

    // getWorkingDir() {
    //     let workingDir = 
    //     this.workingDir.((loc) => {

    //     })
    //     return workingDir
    // }

    executeInstruction(instruction) {
        let instructionParsed = instruction.command.split(' ')
        if (instructionParsed[0] === 'cd') {
            this.changeDir(instructionParsed[1])
        } else if (instructionParsed[0] === 'ls') {
            let responses = instruction.responses
            responses.forEach((array) => {
                if (responses[0] === 'dir') {
                    this.createChildFile(responses[1], 'dir', 0)
                } else {
                    this.createChildFile(responses[1], 'file', +responses[0])
                }
            })
        }
        
    }

    getTotalSize(pathname) {

    }
}

const daySevenFunctions = {
    importText: function(filepath) {
        const inputText = fs.readFileSync(filepath).toString()
        return inputText
    },
    parseText: function(string) {
        const inputArray = string.split('$')
        const parsedArray = inputArray.filter((c) => {return c !== ''} )
        const objInstructions = parsedArray.map((c) => {
            let removeWhitespace = c.trim()
            let arrayCR = removeWhitespace.split('\n\r')
            return {command: arrayCR[0],
                responses: arrayCR.length > 1 ? arrayCR.slice(1):null
            }
        })
        return objInstructions
    }
}

module.exports = { daySevenFunctions}