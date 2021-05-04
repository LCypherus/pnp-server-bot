const Discord = require('discord.js');

module.exports = {
    name: 'Invitelink',
    description: "Embeds! Invitelink",
    execute(msg, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8B0000')
        .setTitle('Invite link')
        .setURL('https://discord.gg/ZN4DrdGg')
        .setDescription('This is the invite link to invite players to this server.\n\nhttps://discord.gg/ZN4DrdGg\n\n Enjoy!')
        .setFooter('If your having a problem with the invite link. Contact L_Cypherus.');

        msg.channel.send(newEmbed);
    }

}