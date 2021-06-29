'use strict'

const attachments = (() => {   

    let send = async (msg, args) => {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png')
        
        message.channel.send(attachment)
    }  
    
    let help = () => {
        return ({
            name: 'attachments',
            description: 'Sending Attachments.',
            usage: 'attachments',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = attachments 