module.exports = async (client) => {
    const guild = client.guilds.cache.get('685583244154109986');
    setInterval(() => {
        //const playerCount = guild.memberCount;
        let roles = ["733945535018565704"];
        let members = guild.members.cache.filter(m=>m.roles.cache.some(r=>roles.includes(r.id)));
        let count = members.size;

        const channel = guild.channels.cache.get('839084693315649566');
        channel.setName(`Players: ${count}`);
    }, 10000);
}