'use strict'

const help = (() => {   

    let send = async (msg, args) => {
        const { prefix } = require('../../common/common.js')
        const AllCommands = require('../../common/AllCommands')
        const { MessageEmbed } = require('discord.js')

        let arsgCommand = ''

        if (args.length > 0) {
            arsgCommand = args.join(' ')
        }

        const listCommands = await AllCommands.AllCommandsWithPath()
        const embed = new MessageEmbed()

        if (arsgCommand === '') {
            embed
                .setTitle('Lista de comandos')

            for (const command of listCommands) {
                embed.addField(
                    command.help().name, 
                    prefix + command.help().usage, 
                    false
                )
            } 
        } else {
            for (const command of listCommands) {

                if (arsgCommand === command.help().name) {
                    let helpObject = command.help()

                    embed
                        .setTitle(helpObject.name)
                        .setDescription(helpObject.description)                
                        .addFields([
                            {
                                name: 'Como usar',
                                value: prefix + helpObject.usage,
                                inline: true
                            },
                            {
                                name: 'Categoria',
                                value: helpObject.category,
                                inline: true
                            }
                        ])    
                }
            } 
        }

        /*if (commands[command]) {
            let helpObject = commands[command].help()

            let embed = new MessageEmbed()
                .setTitle(helpObject.name)
                .setColor(
                    generateRandomColor()
                )
                .setDescription(helpObject.description)                
                .addFields([
                    {
                        name: 'Como usar',
                        value: prefix + helpObject.usage,
                        inline: true
                    },
                    {
                        name: 'Categoria',
                        value: helpObject.category,
                        inline: true
                    }
                ])       

                msg.channel.send(embed)
        } else {
            let embed = new MessageEmbed()
                .setTitle('Lista de comandos')
                
            for (let command in await AllCommands.AllCommandsWithPath()){
                console.log(command)

                    embed.addField(
                        command.help().name, 
                        prefix + command.help().usage, 
                        false
                    )
            }

            msg.channel.send(embed)
        }*/
        msg.channel.send(embed)
    }  
    
    let help = () => {
        return ({
            name: 'help',
            description: 'hello world.',
            usage: 'help',
            category: 'entreterimento'
        })
    }

    return {
        send,
        help
    }
    
})()

module.exports = help