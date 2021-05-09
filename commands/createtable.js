const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function(client, msg, args) {
    let tableName = 'dnd';
    let dm = msg.author.id;
    let game = 822737501411737602; //dnd role
    let rolesId = 840834624501448744;
    if (args.length > 0) {
        dm = args[1];
        tableName = args.slice(2,args.length).join(" ");
        game = args[0];
    }

    let guild = client.guilds.cache.get("685583244154109986"); // Guild the user needs to have the role in
    let requiredRole = guild.roles.cache.get("733822632004288553"); // Role that the user needs
    let member = guild.members.cache.get(msg.author.id); // Member object of the user in guildA

    // Check if they have the role 
    if (member.roles.cache.has(requiredRole.id)) {
        msg.channel.send("DM: " + dm);
        msg.channel.send("Table Name: " + tableName);

        guild.roles.create({
            data: {
              name: tableName,
              color: 'BLUE',
            }
         })
         .then(role => {
          let rolesId = role.id;
          console.log(rolesId);
         }).then(cat => {
            msg.guild.channels.create('Important ', {
                        type: 'category',
                        permissionOverwrites: [
                            {
                                id: rolesId,
                                allow: ['VIEW_CHANNEL'],
                            }]
        })})
    } else {
        msg.channel.send("You do not have the required role");
    };
    
    console.log(args)
};