module.exports = (client) => {
    const channelId = "688102078421139538"; //welcome channel
    const channelGetaRole = "804618910779310080";
    const channelGeneralTalk = "685877740481544211";
    const channelCurrentGames = "733960041719136327";
    const channelTicketInfo = "773553022843748382";

    client.on('guildMemberAdd', (member) => {
        console.log(member);

        const message = `Hi <@${member.id}> `;

        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    })
}
