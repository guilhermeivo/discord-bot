'use strict'

const botapplication = (() => {   

    let send = async (msg, args) => {
        msg.channel.send('Hello World')
    }  
    
    let help = () => {
        return ({
            name: 'botapplication',
            description: 'hello world.',
            usage: 'botapplication',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = botapplication 