const { commands, prefix } = require('../utils/utils.js')
const { MessageEmbed } = require('discord.js')
const generateRandomColor = require('../utils/generateRandomColor.js')

module.exports = {
    run: async ( message, args ) => {
        let command = ''

        if (args.length > 0) {
            command = args.join(' ')
        }

        if (commands[command]) {
            let helpObject = commands[command].help()

            const embed = new MessageEmbed()
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

            message.channel.send(embed)
        } else {
            let embed = new MessageEmbed()
                .setTitle('Lista de comandos')
                .setColor(
                    generateRandomColor()
                )
                
            for (let element in commands){
                    embed.addField(
                        commands[element].help().name, 
                        prefix + commands[element].help().usage, 
                        false
                    )
            }

            message.channel.send(embed)
        }
    }
}