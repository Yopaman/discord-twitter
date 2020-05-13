const Command = require('./command')
const T = require('./twitter_connect')
const config = require('../config')

module.exports = class Tweet extends Command {
    static find(message) {
        return message.content.startsWith(super.prefix + 'tweet')
    }

    static action (msg, args) {
        let tweet = msg.content.substring(6);
        if (tweet.length > 279) {
            msg.reply('Votre tweet doit faire 280 caractères au maximum.')
        } else {
            T.post('statuses/update', { status: tweet }, (err, data) => {
                msg.reply('Tweet posté : https://twitter.com/' + config.t_username + '/status/' + data.id_str);
            });
        }
    }
}