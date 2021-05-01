console.log('Beep beep! ✌');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const welcome = require('./commands/welcome.js')
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord () {
    console.log('🎈🎈🎈');

    welcome(client);
}

const commandHandler = require("./commands");

client.on('message', commandHandler);