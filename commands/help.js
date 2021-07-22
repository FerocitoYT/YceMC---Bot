const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

    const help = new Discord.MessageEmbed()
    .setTitle('Comandos disponíveis:')
    .setDescription('**!!help\n!!evento\n!!ip**')
    .setColor('#1842c5')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(help)

}

module.exports.help = {
    name: 'help',
    aliases: []

}