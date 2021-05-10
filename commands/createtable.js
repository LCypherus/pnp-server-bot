const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function(client, msg, args) {
    let tableName = 'dnd';
    let dm = msg.author.id;
    let game = 822737501411737602; //dnd role
    let role = 822737501411737602; //dnd role
    let categoryId = 720689721168101435;
    if (args.length > 0) {
        dm = args[1];
        tableName = args.slice(2,args.length).join(" ");
        game = args[0];
    }

    let tableShorthand = tableName.match(/(?:^| )(\w)/g).join("").replace(/ /gi, ""); // This should be a string without spaces

    let guild = client.guilds.cache.get("685583244154109986"); // Guild the user needs to have the role in
    let requiredRole = guild.roles.cache.get("733822632004288553"); // Role that the user needs
    let member = guild.members.cache.get(msg.author.id); // Member object of the user in guildA

    // Check if they have the role 
    if (member.roles.cache.has(requiredRole.id)) {
        msg.channel.send("DM: " + dm);
        msg.channel.send("Table Name: " + tableName);
        msg.channel.send("Table Shorthand: " + tableShorthand); // the shorthand identifier for each table; mz, anb, etc.

        guild.roles.create({
            data: {
                name: tableName,
                color: 'BLUE',
            }
        }).then(role => {
            rolesId = role.id;
            return msg.guild.channels.create(tableName, {
                type: 'category',
                permissionOverwrites: [{
                    id: rolesId,
                    allow: ['VIEW_CHANNEL'],
                }]
            });
        }).then(cat => {
            msg.guild.channels.create(tableShorthand, {
                type: 'text',
                parent: cat,
                permissionOverwrites: [{
                    id: rolesId,
                    allow: ['VIEW_CHANNEL'],
                }]
            });
        }).catch(console.error);
    } else {
        msg.channel.send("You do not have the required role");
    };
};