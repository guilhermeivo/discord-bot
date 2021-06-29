'use strict'

const getAllCommands = (() => {

    let include = (path) => {
        return require(__dirname + '/..' + path);
    }  

    let AllCommandsWithPath = async () => {
        const fs = require('fs').promises

        let requiresCommands = []

        const folderName = 'commands'

        const folders = await fs.readdir(`./src/${folderName}`)

        for (const folder of folders) {
            requiresCommands.push(
                include(`/${folderName}/${folder}/${folder}.js`)
            )
        }

        return requiresCommands
    }
    
    return {
        AllCommandsWithPath
    }

})()

module.exports = getAllCommands