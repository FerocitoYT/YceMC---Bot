const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

let ip = db.get('listadeips')
if(ip == null) ip = "No momento o servidor não está disponível."

    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Lista de ips disponíveis:`)
    .setDescription(`**${ip}**`)
    .setColor('RANDOM')
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
      
    message.channel.send(embed)

}

module.exports.help = {
    name: 'ip',
    aliases: []

}