const Discord = require('discord.js');

module.exports = async function(client /* bot client */, msg /* message object */, args /* arguments */) {
    const channelStartaTicket = "772546310230114345";
    
    switch (args[0]){
        case "roll":
            const helpRollEmbed = new Discord.MessageEmbed()
                .setColor('#3CA489')
                .setTitle('"&roll" Help')
                .setDescription('The P&P bots roll command is made for all basic rolls and arithmetic.\n\n**Command:** `&roll #d#.`\n\n**Example 1:** `&roll 1d20`\n**Example 2:** `&roll 1d6+2d8`\n**Example 3:** `&roll 4-7+32`\n**Example 4:** `&roll (1d4+2d6)*4`\n\nMore features might be added later on.')
                .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                .setFooter('&help roll - Contact L_Cypherus#1609 for any more questions');

                msg.channel.send(helpRollEmbed);
            break;
        case "ticket":
            const helpTicketEmbed = new Discord.MessageEmbed()
                .setColor('#3CA489')
                .setTitle('"&ticket" Help')
                .setDescription('The P&P bots ticket service is designed to get you, in private contact, with the (Assistant) Grand Masters.\n\nYou may use the ticket service for kinda everything that would involve the grand masters.\nThis includes, but is not limited to:\n- A complaint about a DM or fellow member\n- A complaint about the server\n- You want to become a DM\n- Troubles you have with a fellow member/DM\n\nTo be sure that your ticket request is hidden, always use the `Start a Ticket` channel for writing the ticket command.\n\n**Command:** `&ticket open`\n\n**Talking only to the Grand Masters?**\nThats absolutely possible. This may be the case if you have a complain about an Assistant Grand Master or you want to talk to something so delicate, that you don\'t want to many people involved.\n\n**Command:** `&ticket open adminsOnly`\n\n**Opening up a ticket to become a DM?**\nPerfect! So you want to become a dm? Once you use the command new channel will be made with further instructions.\n\n**Command:** `&ticket open newTable`')
                .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                .setFooter('&help ticket - Contact L_Cypherus#1609 for any more questions');
        
                msg.channel.send(helpTicketEmbed);
            break;
        case "invitelink":
            const helpInviteLinkEmbed = new Discord.MessageEmbed()
                .setColor('#3CA489')
                .setTitle('"&invitelink" help')
                .setDescription('We highly encourage every one in this server to send out our invite link as much as possible to let this community grow bigger and bigger.\n\nThis command is made so the invite link can easely be called at any spot.\n\n**Command:** `&invitelink`')
                .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                .setFooter('&help invitelink - Contact L_Cypherus#1609 for any more questions');
            
                msg.channel.send(helpInviteLinkEmbed);
            break; 
        case "createtable":
            let guild = client.guilds.cache.get("685583244154109986");  
            let requiredRole = guild.roles.cache.get("733822632004288553", "817145865105178624");   
            let member = guild.members.cache.get(msg.author.id); // Member object of the user in guildA
            if (member.roles.cache.has(requiredRole.id)) {
                const helpCreateTableEmbed = new Discord.MessageEmbed()
                    .setColor('#3CA489')
                    .setTitle('"&createtable" help')
                    .setDescription('The P&P bot made it possible to create a role, category and all tables with just 1 single command. This help command will assist you in the proper use of the command. If you did use the wrong argument order, then the easiest way to fix it is to delete everything and start over.\n\n**Command:** `&createtable game username tablename`\n**Example:** `&createtable dnd L_Cypherus#1609 Candlekeep Mysteries`\n\n**The following games are implemented:**\n- Dungeons and Dragons: dnd\n- Pokémon Tabletop United: ptu\nEpithet: epither\n\nYou can find the username + #xxxx by right clicking the dm\'s name and going to the profile.\n\nThe tablename can have multiple words.\n\nThe only thing that you have to do is moving the role to the correct spot, create a voice channel if it\'s a voice campaign and/or create extra channels. Try to clone existing channels as much as possible to do this last one.')
                    .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                    .setFooter('&help invitelink - Contact L_Cypherus#1609 for any more questions');
                    
                    msg.channel.send(helpCreateTableEmbed);
            } else {
                msg.channel.send("You don't have the correct permissions to view this command. Please use &help for a list of usable commands.");
            }
            break;        
        case "list":
            default:
                const helpListEmbed = new Discord.MessageEmbed()
                    .setColor('#3CA489')
                    .setTitle('&help list')
                    .setDescription('Our P&P bot is getting bigger and bigger every day so we felt the need to create a &help (list) command so every player would know what our bot can do and how to use it.')
                    .addFields(
                        { name: '&roll', value: 'Our basic roll bot. Learn more about it with `&help roll`' },
                        { name: '&invitelink', value: 'Get our invite link on every channel in the server. Learn more about it with `&help invitelink`'},
                        { name: '&ticket', value: 'Want to get in contact with the (Assistant) Grand Masters? Learn more about it with `&help ticket`' },
                    )
                    .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
                    .setFooter('&help list - Contact L_Cypherus#1609 for any more questions');
                
                    msg.channel.send(helpListEmbed);
    }
};