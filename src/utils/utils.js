'use strict'

// commands
const botapplication = require('../commands/botapplication.js')
const gif = require('../commands/gif.js')

module.exports = {
    prefix: '!',
    commands: {
        botapplication,
        gif
    }
}