'use strict'

const Discord = require('discord.js')
const client = new Discord.Client(
    { disableMentions: 'everyone' }
)

// events
const ready = require('./events/ready')
const message = require('./events/message')
const guildMemberAdd = require('./events/guildMemberAdd')
const guildMemberRemove = require('./events/guildMemberRemove')

client.login(process.env.BOTTOKEN)

client.on('warn', info => console.log(info))
client.on('error', console.error)

client.on('ready', () => ready(client))
client.on('message', msg => message(client, msg))
client.on('guildMemberAdd', member => guildMemberAdd(member))
client.on('guildMemberRemove', member => guildMemberRemove(member))