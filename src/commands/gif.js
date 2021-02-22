'use strict'

const { MessageEmbed } = require('discord.js')
const generateRandomColor = require('../utils/generateRandomColor.js')
const fetch = require('node-fetch')
require('dotenv').config()

module.exports = {
    run: async ( message, args ) => {
        let keywords = 'excited'

        if (args.length > 0) {
            keywords = args.join(' ')
        }
    
        let urlSearch = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORTOKEN}&contentfilter=high`
        let responseSearch = await fetch(urlSearch)
        let jsonSearch = await responseSearch.json()
        
        let index = Math.floor(Math.random() * jsonSearch.results.length)

        let urlGif = `https://g.tenor.com/v1/gifs?ids=${jsonSearch.results[index].id}&key=${process.env.TENORTOKEN}`
        let responseGif = await fetch(urlGif)
        let jsonGif = await responseGif.json()

        const embed = new MessageEmbed()
            .setTitle('GIF')
            .setColor(
                generateRandomColor()
            )       
            .setImage(jsonGif.results[0].media[0].gif.url)
            .setDescription(`GIF from Tenor: ${keywords}`)

        message.channel.send(embed)
    },

    help: () => {
        return ({
            name: 'gif',
            description: 'Mostra gifs pela descrição.',
            usage: 'gif',
            category: 'entreterimento'
        })
    }
}