const Discord = require('discord.js');

module.exports = {
	name: 'messageCreate',
	async run (bot, message) {

let prefix = "js!";

if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase()

let cmd = client.cmds.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	
if(cmd) {
  cmd.execute(client, message, args);
    }
  }
}
