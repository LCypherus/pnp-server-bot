const Discord = require("discord.js");
 
module.exports = async function (client, msg, args){
    /*
    This first part here works.
    */
    const guild = client.guilds.cache.get('685583244154109986');
    let ticketInfo = "This is a general ticket.";
    let ticketPrivate = false;
    if (args.length > 0){
        let start = 1;
        if (args[1] == "adminsOnly"){
            start = 2;
            ticketPrivate = true;
        }
        let ticketInfo = args.slice(start, args.length);
        ticketInfo = ticketInfo.join(" ");

        console.log(msg.author)
    }
    /* 
    Create a new channel.
    Needs a user ID. Not sure how to get this from Discord.
    I'm guessing it's msg.author.id? Anyway, not sure if
    anything below this point works. Needs testing.
    */
    const ticketCategory = "834881936454713424"; // Set this to the number for the category for Tickets
    if (ticketPrivate){
        guild.channels.create("Ticket: " + msg.author.username,{ // msg.author might be incorrect
        type: "text",
        parent: ticketCategory,
        permissionOverwrites: [
            {
                id: msg.guild.roles.everyone, // Everyone
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.guild.roles.cache.get("733822632004288553"), // Grand Master, fill this out
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })
    }
    else{
        guild.channels.create("Ticket for " + msg.author.username,{ // msg.author might be incorrect
        type: "text",
        parent: ticketCategory,
        permissionOverwrites: [
            {
                id: msg.guild.roles.everyone, // Everyone
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "733822632004288553", // Grand Master, fill this out
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: "817145865105178624", // Assistant Grand Master, fill this out
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            },
            {
                id: msg.author.id,
                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })
    }
}
