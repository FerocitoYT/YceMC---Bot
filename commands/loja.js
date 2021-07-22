const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

  module.exports.loja = {
    name: 'loja',
    aliases: ['vip', 'mvp']

}

    const loja = new Discord.MessageEmbed()
    .setTitle('Loja do Servidor:')
    .setDescription('**VIP: 10R$\nMVP: 30R$\n1K de Cash: ???**')
    .setColor('#1842c5')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(loja)

}

