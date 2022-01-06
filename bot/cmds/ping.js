const djs = require('discord.js');

module.exports = {
  name: 'ping',
  alias: [],
  execute (bot, message, args) {

   message.reply(
     {
       content: `Mi latencia es de **${bot.ws.ping}** milisegundos`, allowedMentions: {
         repliedUser: false
       }
     }
   )
    
  }
}