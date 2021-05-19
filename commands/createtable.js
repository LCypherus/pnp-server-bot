const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function(client, msg, args) {
    let tableName = 'dnd';
    let dm = msg.author.id;
    if (args.length > 0) {
        game = args[0];
        dm = args[1];
        tableName = args.slice(2,args.length).join(" ");
    }
    let spectator = "733945802296393793";
    let rolesId = "840834624501448744"; // Testrole
    let gameid = "822737501411737602"; // DnD Role
    dmID = client.users.cache.find(u => u.tag === dm).id

    if (game == "dnd"){
        gameid = "822737501411737602"; 
    }
    else if (game == "ptu"){
        gameid = "832017680117923881";
    }
    else if (game == "epithet"){
        gameid = "822737950025711636";
    }
    else {}

    let tableShorthand = tableName.match(/(?:^| )(\w)/g).join("").replace(/ /gi, ""); // This should be a string without spaces

    let guild = client.guilds.cache.get("685583244154109986"); // Guild the user needs to have the role in
    let requiredRole = guild.roles.cache.get("733822632004288553", "817145865105178624"); // Role that the user needs
    let member = guild.members.cache.get(msg.author.id); // Member object of the user in guildA

    // Check if they have the role 
    if (member.roles.cache.has(requiredRole.id)) { 
        guild.roles.create({
            data: {
                name: tableName + " Player",
                color: 'GREEN',
                position: 6,
            }
        }).then(role => {
            rolesId = role.id;
            return msg.guild.channels.create("(X/Z) " + tableName, {
                type: 'category',
                permissionOverwrites: [
                    {
                        id: msg.guild.roles.everyone, // Everyone
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: spectator, // Spectator
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: gameid, // Game Format
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: rolesId,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES"]
                    },
                    {
                        id: dmID,
                        allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD"]
                    }
                ]
            });
        }).then(cat => {
            msg.guild.channels.create(tableShorthand + "-info", {
                type: 'text',
                parent: cat,
                permissionOverwrites: [
                    {
                        id: msg.guild.roles.everyone, // Everyone
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: spectator, // Spectator
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: gameid, // Game Format
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: rolesId,
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: dmID,
                        allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD"]
                    }
                ]
            });
            msg.guild.channels.create(tableShorthand + "-main", {
                type: 'text',
                parent: cat,
            });
            msg.guild.channels.create(tableShorthand + "-ooc", {
                type: 'text',
                parent: cat,
                permissionOverwrites: [
                    {
                        id: msg.guild.roles.everyone, // Everyone
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES"]
                    },
                    {
                        id: spectator, // Spectator
                        allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
                    },
                    {
                        id: gameid, // Game Format
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES"]
                    },
                    {
                        id: rolesId,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES"]
                    },
                    {
                        id: dmID,
                        allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD"]
                    }
                ]
            });
            msg.guild.channels.create(tableShorthand + "-rolls", {
                type: 'text',
                parent: cat,
                permissionOverwrites: [
                    {
                        id: rolesId,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "ADD_REACTIONS", "SEND_TTS_MESSAGES"]
                    },
                    {
                        id: dmID,
                        allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD"]
                    }
                ]
            });
            msg.guild.channels.create(tableShorthand + "-dm", {
                type: 'text',
                parent: cat,
                permissionOverwrites: [
                    {
                        id: dmID,
                        allow: ["MANAGE_CHANNELS", "ADD_REACTIONS", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD"]
                    }
                ]
            });

            const createtableEmbed = new Discord.MessageEmbed()
	            .setColor('#3CA489')
	            .setTitle('You succesfully added a new table')
	            .setDescription('This is the summary of the new table')
	            .setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
	            .addFields(
		            { name: 'Dungeon Master', value: dm, inline: true },
	        	    { name: 'Format', value: game, inline: true },
                    { name: 'Table Name:', value: tableName, inline: false },
                    { name: 'Table Shorthand', value: tableShorthand, inline: true },
                    { name: 'Playersrole', value: tableName + " Player", inline: true },
	            )
	            .setFooter('&createtable - Contact L_Cypherus when you\'re having problems with this command.');

                msg.channel.send(createtableEmbed);
        }).catch(console.error);
    } else {
        msg.channel.send("You do not have the required role");
    };
};