const Discord = require("discord.js");
 
module.exports = async function (client, msg, args){
    const guild = client.guilds.cache.get('685583244154109986');
    let ticketInfo = "This is a general ticket.";
    let ticketPrivate = false;
    let ticketNewTable = false;
    if (args.length > 0){
        let start = 1;
        if (args[1] == "adminsOnly"){
            start = 2;
            ticketPrivate = true;
        }
        else if (args[1] == "newTable"){
            start = 2;
            ticketNewTable = true;
        }
        let ticketInfo = args.slice(start, args.length);
        ticketInfo = ticketInfo.join(" ");
    }

    // Create a new channel.

    const ticketCategory = "834881936454713424"; // category for Tickets
    if (ticketPrivate){
        const createdChannel = await guild.channels.create("Ticket private: " + msg.author.username,{ 
        type: "text",
        parent: ticketCategory,
        permissionOverwrites: [
            {
                id: msg.guild.roles.everyone, // Everyone
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.guild.roles.cache.get("733822632004288553"), // Grand Master
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })
        createdChannel.send(ticketInfo);
    }
    else if (ticketNewTable){
        const createdChannel = await guild.channels.create("Ticket new table: " + msg.author.username,{ 
        type: "text",
        parent: ticketCategory,
        permissionOverwrites: [
            {
                id: msg.guild.roles.everyone, // Everyone
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "733822632004288553", // Grand Master
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "817145865105178624", // Assistant Grand Master
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })
        createdChannel.send(ticketInfo);
    }
    else{
        const createdChannel = await guild.channels.create("Ticket for 2 " + msg.author.username,{ 
        type: "text",
        parent: ticketCategory,
        permissionOverwrites: [
            {
                id: msg.guild.roles.everyone, // Everyone
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "733822632004288553", // Grand Master
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "817145865105178624", // Assistant Grand Master
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })
        createdChannel.send(ticketInfo);

    }

}
