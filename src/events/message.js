'use strict'

const message = (() => {

    let getAllCommands = async () => {
        const fs = require('fs').promises

        let requiresCommands = []

        const folderName = 'commands'

        const folders = await fs.readdir(`./src/${folderName}`)

        for (const folder of folders) {
            requiresCommands.push(
                require(`../${folderName}/${folder}/${folder}.js`)
            )
        }

        return requiresCommands
    }

    let callCommands = async (client, msg) => {
        const { prefix } = require('../common/common.js')

        let tokens = msg.content.split(' ')
        let command = tokens.shift()
    
        if (command.charAt(0) === prefix) {
            command = command.substring(1)
            
            const listCommands = await getAllCommands()

            listCommands.forEach(current => {
                if (command === current.help().usage) {
                    current.send(msg, tokens)
                }
            })
        }
    }
    
    return {
        callCommands
    }

})()

module.exports = message