const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  
    const embed = new Discord.MessageEmbed()
    .setTitle(`IPs do Servidor:`)
    .setDescription(`**Lista de IPs disponíveis:**`)
    .setThumbnail('https://cdn.discordapp.com/icons/860180762242056243/ba9e90fbf2de5f7abe35d45b9181b7c1.png?size=2048')
    .addField("Atenção:", "Atualmente o servidor está apenas aberto para VIPS.")
    .addField("-", "● ycemc.xyz\n● redechiqueiro.tk\n\n🤔 Nenhum IP irá interferir na sua conexão")
    .setColor('RANDOM')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
      
    message.channel.send(embed)

}

module.exports.help = {
    name: 'ip',
    aliases: []

}