const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

    const status = new Discord.MessageEmbed()
    .setTitle('Status do Servidor:')
    .setDescription('**Rede: Online\nLobby: Online\nSkyblock: Online\nBed Wars: Offline**')
    .setColor('#1842c5')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(status)

}

module.exports.help = {
    name: 'status',
    aliases: []

}