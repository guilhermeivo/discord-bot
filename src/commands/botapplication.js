'use strict'

module.exports = {
    run: async ( message, args ) => {
        message.channel.send('Hello World')
    },

    help: () => {
        return ({
            name: 'botapplication',
            description: 'hello world',
            usage: 'hello world',
            category: 'entreterimento'
        })
    }
}