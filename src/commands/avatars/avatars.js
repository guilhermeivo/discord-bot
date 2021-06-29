'use strict'

const avatars = (() => {   

    let send = async (msg, args) => {
        msg.reply(msg.author.displayAvatarURL())
    }  
    
    let help = () => {
        return ({
            name: 'avatars',
            description: '',
            usage: 'avatars',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = avatars 