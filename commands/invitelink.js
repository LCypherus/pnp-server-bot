const fetch = require('node-fetch');

module.exports = {
    execute(msg, args, Discord) {
        msg.channel.send({
            embed: {
                    "title": "Pen and Players Roleplayer Server Invite Link",
                    "description": "This is the invite link to invite players to this server.",
                    "color": 5814783,
                    "fields": [
                      {
                        "name": "Link",
                         "value": "https://discord.gg/ZN4DrdGg"
                      }
                    ],
                    "footer": {
                      "text": "If you're having a problem with the invite link. Contact L_Cypherus."
                    }
                }
        });
    }
};