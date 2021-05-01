module.exports = (client) => {
    const channelId = "688102078421139538"; //welcome channel
    const channelGetaRole = "804618910779310080";
    const channelGeneralTalk = "685877740481544211";
    const channelCurrentGames = "733960041719136327";
    const channelTicketInfo = "773553022843748382";

    client.on('guildMemberAdd', (member) => {
        console.log(member);

        const message = 
`Welcome <@${member.id}> to Pen-and-Players Roleplay Server. We’re a ttrpg server open to all forms of ttrpg, whether that’s 5E, 4E, pathfinder, PTU, any and all are ttrpg systems welcome here in our community.
                    
We ask you please head over to ${member.guild.channels.cache.get(channelGetaRole).toString()} first to get yourself the proper tag you’d like to have for our server, and then hop into ${member.guild.channels.cache.get(channelGeneralTalk).toString()}  to chat with us!
                    
At ${member.guild.channels.cache.get(channelCurrentGames).toString()} you find all the tables and if they are in need of new players. Your can also check for available seats in a table to check the category name. If you wish to start your own table then head over to ${member.guild.channels.cache.get(channelTicketInfo).toString()}  to open a ticket so we can talk about it.
                    
Again, Welcome and enjoy your stay!
<@453208397618085899> and <@283395860035928075>`;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    })
}
