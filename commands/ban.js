const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`❌ **|** Você não tem permissão para utilizar esse comando.`);
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!bUser) return message.channel.send(`❌ **|** Você precisa mencionar alguém para eu banir!`);
  	    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ **|** Não posso banir alguém que tem a permissão de `Administrador`.");
        if(bUser.id === message.author.id) return message.channel.send(`❌ **|** Você não pode banir si mesmo!`)
      
        let bReason = args.join(" ").slice(22);
        if(!bReason) bReason = "Motivo não especificado."

  bUser.ban({ days: 7, reason: `Banido por: ${message.author.username} / Motivo: ${bReason}`})
    
          let banEmbed = new Discord.MessageEmbed()
        .setTitle(`🚫 YceMC I Banimento`)
        .addField('Usuário banido:', `${bUser}`)
        .addField('Staff:', `${message.author}`)
        .addField('Motivo:', `${bReason}`)
        .setColor("#bc0000")
        .setThumbnail(bUser.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setTimestamp()


        const embed = new Discord.MessageEmbed()
        .setTitle(`Você foi banido permanentemente do YceMC`)
        .addField("Staff:", `${message.author.username}`)
        .addField("Motivo:", `${bReason}`)
        .setColor("#bc0000")
        .setFooter(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp();

        try{
          await bUser.send(embed)
        }catch(e){
        }

   	let banchannel = message.guild.channels.cache.get('860180763210153987').send(banEmbed)

          message.channel.send(`:white_check_mark: **|** Você baniu o usuário ${bUser.user.tag}.`)
}
module.exports.help = {
    name: "ban"
}