'use strict'

const message = (() => {

    let callCommands = async (client, msg) => {
        const { prefix } = require('../common/common')
        const AllCommands = require('../common/AllCommands')

        let tokens = msg.content.split(' ')
        let command = tokens.shift()
    
        if (command.charAt(0) === prefix) {
            command = command.substring(1)
            
            const listCommands = await AllCommands.AllCommandsWithPath()

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