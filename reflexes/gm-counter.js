module.exports = async (client) => {
    const guild = client.guilds.cache.get('685583244154109986');
    setInterval(() => {
        //const playerCount = guild.memberCount;
        let roles = ["685584102342393873"];
        let members = guild.members.cache.filter(m=>m.roles.cache.some(r=>roles.includes(r.id)));
        let count = members.size;

        const channel = guild.channels.cache.get('839103814267174952');
        channel.setName(`Game Masters: ${count}`);
        console.log('Updating Member Count');
    }, 10000);
}