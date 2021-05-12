const Discord = require('discord.js');

module.exports = async function(client /* bot client */, msg /* message object */, args /* arguments */) {
    const channelStartaTicket = "772546310230114345";
    
    switch (args[0]){
        case "roll":
            msg.channel.send("roll description");
            break;
        case "ticket":
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#3CA489')
                .setTitle('&ticket help')
                .setDescription('The P&P bots ticket service is designed to get you, in private contact, with the (Assistant) Grand Masters.\n\nYou may use the ticket service for kinda everything that would involve the grand masters.\nThis includes, but is not limited to:\n- A complaint about a DM or fellow member\n- A complaint about the server\n- You want to become a DM\n- Troubles you have with a fellow member/DM\n\nTo be sure that your ticket request is hidden, always use the **Start a Ticket** channel for writing the ticket command.\n\n**Command:** &ticket open')
                .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                .addFields(
                    { name: 'Talking only to the Grand Masters?', value: 'Thats absolutely possible. This may be the case if you have a complain about an Assistant Grand Master or you want to talk to something so delicate, that you don\'t want to many people involved.\n\n**Command:** &ticket open adminsOnly' },
                    { name: 'Opening up a ticket to become a DM?', value: 'Perfect! So you want to become a dm? Once you use the command new channel will be made with further instructions.\n\n**Command:** &ticket open newTable' },
                    //{ name: '\u200B', value: '\u200B' },
                    //{ name: 'Basic ticket', value: "&ticket open", inline: true },
                    //{ name: 'Private ticket', value: "&ticket open adminsOnly", inline: true },
                    //{ name: 'Become a dm', value: "&ticket open newTable", inline: true },
                )
                .setFooter('&help ticket');
        
                msg.channel.send(exampleEmbed);
            break;
        case "list":
            default:
                msg.channel.send("List description")
    }
};