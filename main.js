const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const bot = new Client({ intents: 32735 });
require('./express');
bot.cmds = new Collection();

const fs = require('fs');
const { readdirSync } = require('fs');
const path = require("path");

const cmds = fs
.readdirSync('./bot/cmds')
.filter(file => file.endsWith('.js'));

for (const code of cmds) {
const cmd = require(`./bot/cmds/${code}`);
bot.cmds.set(cmd.name, cmd);
}

const eventos = readdirSync(path.join(__dirname, 'bot/eventos'));
for(const file of eventos){
const evento = require(path.join(__dirname, 'bot/eventos', file));
bot.on(evento.name, (...args) => evento.run(bot, ...args));
}

bot.login(process.env.token)
