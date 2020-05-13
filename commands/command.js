const config = require('../config.json')
const prefix = config.prefix

class Command {

    static find (message) {
        return false
    }

    static parse (message) {
        if (this.find(message)) {
            let args = message.content.split(' ').slice()
            return this.action(message, args)
        }
        return false
    }
}

Command.prefix = config.prefix

module.exports = Command