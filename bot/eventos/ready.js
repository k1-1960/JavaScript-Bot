const djs = require("discord.js");

module.exports = {
 name: 'ready',
 run(bot) {

console.log(' [BOT] is ready!');

   bot.user.setPresence({
     status: 'online',
     activities: [{
       name: 'npm i utiljs-k | v0.5.4',
       type: 'COMPETING'
     }]
   });

  }
}
