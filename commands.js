const roll = require('./commands/roll.js');
const invitelink = require('./commands/invitelink.js');

const commands = { roll, invitelink };

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '&') {
        command = command.substring(1);
        commands[command](msg);
    }
    
};
