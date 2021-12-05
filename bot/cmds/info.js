const djs = require("discord.js");

module.exports = {
name: "info",
alias: ["bot-info", "info-bot", "botinfo"],
execute (bot, message, args) {

var embed = new djs.MessageEmbed()
.setTitle('Mi Información')
.setThumbnail(bot.user.displayAvatarURL({ size: 1024 }))
.setDescription(`
Hola, mi nombre es **${bot.user.username}** y soy un bot creado para hacer evals y probar funciónes de discord.js o node.js, para así no provocar problemas con ningun otro bot.

Si quieres invitarme te invito a echar un vistazo a mi sección \`help\` donde encontraras lo necesario para configurarme.
`)
.addField(`Creador:`, `K1#1960`)
.setColor("#fffa63")
.setFooter(`Pedido por ${message.author.username}`)

message.channel.send({ embeds: [embed] })

  }
}
