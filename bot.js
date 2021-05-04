console.log('Beep beep! ✌');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const welcome = require('./reflexes/welcome.js')
const playerCounter = require('./reflexes/player-counter.js');
const gmCounter = require('./reflexes/gm-counter.js');
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord () {
    console.log('🎈🎈🎈');

    welcome(client);
    playerCounter(client);
    gmCounter(client);
}

const commandHandler = require("./commands");

client.on('message', commandHandler);