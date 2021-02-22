'use strict'

const { prefix, commands } = require('../utils/utils.js')
const help = require('../commands/help.js')

module.exports = ( client, message ) => {
    if (message.channel.id === '798307487605981184') {
        let tokens = message.content.split(' ')
        let command = tokens.shift()

        if (command.charAt(0) === prefix) {
            command = command.substring(1)

            if (commands[command]) {
                commands[command].run(message, tokens)
            } else if (command === 'help') {
                help.run(message, tokens, client)
            }
        }
    }
}