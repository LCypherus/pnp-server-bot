const Discord = require("discord.js");
 
module.exports = async function (client, msg, args){
    const guild = client.guilds.cache.get('685583244154109986');
    let ticketInfo = "This is a general ticket.";
    let ticketPrivate = false;
    let ticketNewTable = false;
    let textMain = "Hey <@" + msg.author.id + ">\n\nPlease describe the reasoning for opening this ticket, include any information you think may be relevant such as proof, other third parties and so on.\n\nThe <@&733822632004288553> and the <@&817145865105178624> will be with you shortly.";
    let textAdminsOnly = "Hey <@" + msg.author.id + ">\n\nThis is an admins only ticket, meaning only the <@&733822632004288553> will see your messages.\n\nPlease describe the reasoning for opening this ticket, include any information you think may be relevant such as proof, other third parties and so on.\n\nWe will be with you shortly.";
    let textNewTicket = "Hey <@" + msg.author.id + ">\n\nGreat to see you opened a ticket to start your own table here in Pen and Player RP server. Please answer the questions written below.\n\nThe <@&733822632004288553> and the <@&817145865105178624> will be with you shortly.";
    const newTableEmbed = new Discord.MessageEmbed()
	.setColor('#3CA489')
	.setTitle('Questions to start a new table')
    .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
	.setDescription('01. Are you new to DMing?\n02. What format/game do you want to use?\n03. Are you familiar with the format you want to use?\n04. What’s your campaign idea?\n05. How is the campaign going to start?\n06. How many days do you need to start off when your table is created?\n07. How can we help you make your campaign successful to you?\n08. What is the name of your campaign?\n09. Voice or Pbp?\n10. How many players will you handle? ')
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
        else {
            ticketElse = true;
        }
        let ticketInfo = args.slice(start, args.length);
        ticketInfo = ticketInfo.join(" ");
    }

    // Create a new channel

    const ticketCategory = "772543356084551710"; // category for Tickets
    if (ticketPrivate){
        const createdChannel = await guild.channels.create("Private ticket " + msg.author.username,{ 
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
        createdChannel.send(textAdminsOnly);
    }
    else if (ticketNewTable){
        const createdChannel = await guild.channels.create("Ticket new table " + msg.author.username,{ 
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
        createdChannel.send(textNewTicket);
        createdChannel.send(newTableEmbed);
    }
    else if (ticketElse){
        msg.channel.send("You used a wrong command to start your ticket. Use `&help ticket` if you want to find the correct command.");
    }
    else{
        const createdChannel = await guild.channels.create("Ticket by " + msg.author.username,{ 
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
        createdChannel.send(textMain);

    }

}
