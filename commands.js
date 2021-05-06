const roll = require('./commands/roll.js');
const invitelink = require('./commands/invitelink.js');

const commands = { roll, invitelink };

module.exports = async function(client, msg) {
    let tokens /* arguments */ = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '&') {
        command = command.slice(1);
        var cmd = commands[command];
        if (cmd) cmd(client, msg, tokens);
    }
};