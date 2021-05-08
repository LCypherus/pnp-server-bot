const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function(client, msg, args) {
    let keywords = 'dnd';
    if (args.length > 0) {
        keywords = args.join(' ');
    }

    // Guild the user needs to have the role in
    let guildA = client.guilds.cache.get("685583244154109986");

    // Role that the user needs
    let requiredRole = guildA.roles.cache.get("733822632004288553");

    // Member object of the user in guildA
    let member = guildA.members.cache.get(msg.author.id);

    // Check if they have the role 
    if (member.roles.cache.has(requiredRole.id)) {
        msg.channel.send(keywords.args[0]);
    } else {
        msg.channel.send("You do not have the required role");
    };
    
    console.log(args)
};