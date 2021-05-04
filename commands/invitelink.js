const Discord = require('discord.js');

module.exports = {
    execute(msg, args, Discord) {
        msg.channel.send("", {
            embed: {
                "content": null,
                "embeds": [
                {
                    "title": "Pen and Players Roleplayer Server Invite Link",
                    "description": "This is the invite link to invite players to this server.",
                    "color": 5814783,
                    "fields": [
                    {
                        "value": "https://discord.gg/ZN4DrdGg"
                    },
                    {
                        "value": "Enjoy!"
                    }
                    ],
                    "footer": {
                    "text": "If your having a problem with the invite link. Contact L_Cypherus."
                    }
                }
                ]
            }
        });
    }
}