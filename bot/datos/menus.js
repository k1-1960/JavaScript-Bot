const djs = require('discord.js');
const menudocs = new djs.MessageSelectMenu()
					.setCustomId('menudocs')
					.setPlaceholder('Funcion...')
					.addOptions([
						{
							label: 'Suma',
							description: 'Informacion de la función suma(.sum)',
							value: 'sum'
						},
						{
							label: 'Resta',
							description: 'Informacion de la función restar(.rest)',
							value: 'rest'
						},
            {
							label: 'Multiplicacion',
							description: 'Informacion de la función multiplicar(.multi)',
							value: 'multi'
						},
            {
							label: 'Divicion',
							description: 'Informacion de la función dividir(.div)',
							value: 'div'
						},
            {
							label: 'Emojis',
							description: 'Informacion de la función emojis(.emojis)',
							value: 'emojis'
						}
					])

module.exports = {
  menudocs
}