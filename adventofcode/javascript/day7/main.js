const fs = require('fs')

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

class File {
    constructor(name, type, size, filepath) {
        this.name = name
        this.type = type
        this.size = size
        this.filepath = filepath
        this.children = {}

    }
}

class Traverser {
    constructor() {
        this.workingDir = undefined;
        this.files = undefined;
    }

    createFile(name, type, size) {
        if (!this.files) {
            this.files = new File(name, type, size, [`${name}`])
            this.workingDir = this.files
        } else {
            this.workingDir.children[name] = new File(name, type, size, this.workingDir.filepath.concat([this.workingDir.name]))
        }
    }

    changeDir(filepath) {
        if (filepath === '..') {
            let filepathUpOneLevel = this.workingDir.filepath.slice(1)
            console.log(filepathUpOneLevel)
            this.workingDir = this.files
            console.log(this.workingDir)
            filepathUpOneLevel.forEach((loc) => {
                if (loc !== '/') {
                    this.workingDir = this.workingDir.children[loc]
                }
            })
        } else {
            this.workingDir = this.workingDir.children[filepath]
        }
    }

    acceptInstruction(instruction) {
        if (instruction.command[0] !== 'cd') {
            // ls
        } else {
            // cd
            this.changeDir(instruction.command[1])
        }

    }

}

module.exports = { daySevenFunctions, File, Traverser }