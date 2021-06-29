'use strict'

const embed = (() => {   

    let send = async (msg, args) => {
        const { MessageEmbed } = require('discord.js')

        const embed = new MessageEmbed()
            .setTitle('A slick little embed')
            .setColor(0xff0000)
            .setDescription('Hello, this is a slick embed!')

            msg.channel.send(embed)
    }  
    
    let help = () => {
        return ({
            name: 'embed',
            description: 'Message Embed.',
            usage: 'embed',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = embed 