const djs = require('discord.js');
const { menudocs } = require('../datos/menus.js');
const { mainpage, sumpage, restpage, multipage, divpage, emojispage } = require('../datos/embeds.js');

module.exports = {
  name: 'docs',
  alias: [],
  async execute(bot, message, args) {

    const row = new djs.MessageActionRow()
      .addComponents(
        menudocs
      );
    const m = await message.channel.send({ embeds: [mainpage], components: [row] });

    const filter = i => i.user.id === message.author.id;

    const collector = m.createMessageComponentCollector({ filter, time: 180000 });

    collector.on('collect', async (i) => {
      if (i.values[0] === 'sum') {
        await i.deferUpdate()
        await m.edit({ embeds: [sumpage], components: [row] })
      }
      if (i.values[0] === 'rest') {
        await i.deferUpdate()
        await m.edit({ embeds: [restpage], components: [row] })
      }
      if (i.values[0] === 'multi') {
        await i.deferUpdate()
        await m.edit({ embeds: [multipage], components: [row] })
      }
      if (i.values[0] === 'div') {
        await i.deferUpdate()
        await m.edit({ embeds: [divpage], components: [row] })
      }
      if (i.values[0] === 'emojis') {
        await i.deferUpdate()
        await m.edit({ embeds: [emojispage], components: [row] })
    }    })
  }
}