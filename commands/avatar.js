const Discord = require("discord.js");

module.exports = {
  run: async (bot, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let avatar = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Avatar: ${user.user.username}`)
        .setDescription(`**[Link do avatar](${user.user.avatarURL()})**`)
        .setImage(user.user.avatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(avatar)
      
  } 
} 