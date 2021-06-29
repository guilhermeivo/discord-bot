'use strict'

const ping = (() => {   

    let send = async (msg, args) => {
        msg.channel.send('Pong')
    }  
    
    let help = () => {
        return ({
            name: 'ping',
            description: 'Pong.',
            usage: 'ping',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = ping 