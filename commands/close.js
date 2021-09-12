const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        if(!message.channel.name.includes(message.author.id)) return

      message.channel.send('Esse canal de ticket será apagado em 5 segundos!')

      setTimeout(() => message.channel.delete(), 5000);

}

module.exports.help = {
    name: 'close',
    aliases: []
};