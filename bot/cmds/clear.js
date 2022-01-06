const djs = require('discord.js');

module.exports = {
  name: 'clear',
  alias: [],
  execute(bot, message, args) {

    let perms = message.member.permissions.has('MANAGE_MESSAGES');
    if (!perms) return message.reply({ content: `No cuentas con los suficientes permisos!`, allowedMentions: { repliedUser: false } });

const cantidad = args.join(" ");

if(isNaN(cantidad)) return message.reply('introduce una cantidad valida!')
    
message.delete().then(() => {
  
  message.channel.bulkDelete(cantidad);
  
  message.channel.send(`**${cantidad}** mensajes borrados correctamente, este mensaje se borrara en 10 segundos`).then(m => { setTimeout(() => { m.delete() }, 10000) });
  
});

    
  }
}