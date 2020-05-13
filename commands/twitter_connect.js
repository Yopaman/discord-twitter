const Twit = require('twit')
const config = require('../config')

const T = new Twit({
    consumer_key: config.t_consumer_key,
    consumer_secret: config.t_consumer_secret,
    access_token: config.t_access_token,
    access_token_secret: config.t_access_token_secret
})

module.exports = T