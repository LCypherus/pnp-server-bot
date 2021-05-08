const Discord = require('discord.js');

module.exports = async function(client /* bot client */, msg /* message object */, args /* arguments */) {
  const inviteLinkEmbed = new Discord.MessageEmbed()
	.setColor('#3CA489')
	.setTitle('Pen and Players Roleplayer Server Invite Link')
	.setURL('https://discord.gg/ZN4DrdGg')
	.setDescription('This is the invite link to invite players to this server.')
	.setThumbnail('https://cdn.discordapp.com/attachments/834882298268221460/840171923093585940/icon.png')
	.addFields(
		{ name: 'Link', value: 'https://discord.gg/ZN4DrdGg' },
	)
	.setFooter('&invitelink - Contact L_Cypherus when you\'re having problems with the invite link.');

  msg.channel.send(inviteLinkEmbed);
};