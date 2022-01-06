const djs = require('discord.js');

module.exports = {
	name: 'messageCreate',
	async run (bot, message) {

let prefix = "$";
    if(message.author.bot) return;

if(!message.content.startsWith(prefix)) return;
 
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase()

let cmd = bot.cmds.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	
if(cmd) {
  cmd.execute(bot, message, args);
    }
  }
}
