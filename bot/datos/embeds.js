const djs = require('discord.js');

const mainpage = new djs.MessageEmbed().setTitle('Main - README.md').setDescription(`
**# utiljs-k**

\> npm simple para todo tipo de cosas incluidas próximamente

**## Instalación**

\`\`\`
$ npm install utiljs-k
\`\`\`

**Usa el menú de abajo para continuar:**
`).setFooter('Primera pagina.').setColor("#ffffff").setTimestamp().setThumbnail('https://i.imgur.com/fOibIzk.jpg')

const sumpage = new djs.MessageEmbed().setTitle('Suma( .sum )').setDescription(`Suma 2 numeros.`).addField(`Modo de uso:`, `\n\`\`\`js
const ujsk = require('utiljs-k');

const num = "1+2";

const msg = await ujsk.sum(num);

console.log(msg)

//resultado:
// 3
\`\`\`\n`).setColor('RED').setFooter('funcion .sum').setTimestamp()

const restpage = new djs.MessageEmbed().setTitle('Resta( .rest )').setDescription(`Resta 2 numeros`).addField(`Modo de uso:`, `\n\`\`\`js
const ujsk = require('utiljs-k');

const num = "5-2";

const msg = await ujsk.rest(num);

console.log(msg)

//resultado:
// 3
\`\`\``).setColor('#808080').setFooter('funcion .rest').setTimestamp()

const multipage = new djs.MessageEmbed().setTitle('Multiplicación( .multi )').setDescription(`Multiplica 2 numeros`).addField(`Modo de uso:`, `\n\`\`\`js
const ujsk = require('utiljs-k');

const num = "1x3";
//usa la letra "x"

const msg = await ujsk.multi(num);

console.log(msg)

//resultado:
// 3
\`\`\``).setColor('RED').setFooter('funcion .multi').setTimestamp()

const divpage = new djs.MessageEmbed().setTitle('Divición( .div )').setDescription(`Divide una cantidad entre otra.`).addField(`Modo de uso:`, `\n\`\`\`js
const ujsk = require('utiljs-k');

const num = "12/3";

const msg = await ujsk.div(num);

console.log(msg);

//resultado:
// 4
\`\`\``).setColor('#808080').setFooter('funcion .div').setTimestamp()

const emojispage = new djs.MessageEmbed().setTitle('Emojis - Discord bots( .emojis )').setDescription(`Utiliza emojis de el paquete utiljs-k en tu bot!`).addField(`Requisitos:`, `Para usar esta característica tu bot necesita estar en el siguiente servidor: [aquí](https://discord.gg/pd4FcMrqXq)

Debes completar un formulario el cual debes enviar a **K1#1960**, dicho formulario se encuentra en el canal **Inicio**.

*Se te notificará si tu bot fue aceptado o rechazado.*

__emojis por [google icons](https://fonts.google.com/icons)__`).addField(`Como usar el codigo:`, `\n\`\`\`js
const ujsk = require('utiljs-k');

let emoji = 'numero de el emoji';

let msg = ujsk.emojis(emoji);

// en tu bot de discord...

<message>.reply({ content: \`\${msg}\` });

// resultado:
// <emoji seleccionado>
\`\`\`\nLa lista de emojis la puedes encontrar en el canal <#928519722402725898>`).setColor("YELLOW").setFooter('Funcion .emojis').setTimestamp()

module.exports = {
  mainpage,
  sumpage,
  restpage,
  multipage,
  divpage,
  emojispage
}