const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

  module.exports.loja = {
    name: 'loja',
    aliases: ['vip', 'mvp']

}

    const loja = new Discord.MessageEmbed()
    .setTitle('Loja do Servidor:')
    .setDescription('Compre Ranks, Cash & mais!')
    .setColor('#1842c5')
    .addFields(
      { name: 'VIP:', value: '10 R$ (permanente)'},
      { name: 'MVP:', value: '30 R$ (permanente)'},
      { name: 'Tag YCE:', value: '5R$ (**ITEM EXCLUSIVO E POR TEMPO LIMITADO!!!**)'},
      { name: 'Tag BETA:', value: '5R$ - *Apenas para os VIPs da Rede Chiqueiro* **(TEMPO LIMITADO!!!)**'},
      { name: 'Cash (1k):', value: '10 R$\n\n*Nós aceitamos Pix/Paypal*'}
    )
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(loja)

}

