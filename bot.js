const Discord = require('discord.js')
const config = require('./config.json')

const Tweet = require('./commands/tweet')

const client = new Discord.Client()

client.login(config.discord_token)

client.on('ready', function() {
    console.log(`Bot connecté en temps que ${client.user.username}!`)
});



client.on('message', function(msg) {
    return Tweet.parse(msg)
});