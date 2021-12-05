const djs = require("discord.js");

module.exports = {
 name: 'ready',
 run(bot) {

 bot.users.fetch("838091364344397835").then(o => o.send("Activo"))

  }
}
