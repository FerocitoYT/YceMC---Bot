const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`❌ **|** Você não tem permissão para utilizar esse comando.`);
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!kUser) return message.channel.send(`❌ **|** Você precisa mencionar alguém para eu expulsar!`);
  	    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ **|** Não posso expulsar alguém que tem a permissão de `Administrador`.");
        if(kUser.id === message.author.id) return message.channel.send(`❌ **|** Você não pode expulsar si mesmo!`)
      
        let reason = args.join(" ").slice(22);
        if(!reason) reason = "Motivo desconhecido."

  kUser.kick({ reason: `Expulso por: ${message.author.username} / Motivo: ${reason}`})
    
        let kickEmbed = new Discord.MessageEmbed()
        .setTitle(`🚫 YceMC I Expulsão`)
        .addField('Usuário expulso:', `${kUser}`)
        .addField('Staff:', `${message.author}`)
        .addField('Motivo:', `${reason}`)
        .setColor("#bc0000")
        .setThumbnail(kUser.user.displayAvatarURL({ dynamic: true }))
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
.setTimestamp();


        const embed = new Discord.MessageEmbed()
 .setTitle(`Você foi expulso do YceMC`)
        .addField("Staff:", `${message.author.username}`)
        .addField("Motivo:", `${reason}`)
        .setColor("#bc0000")
        .setFooter(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp();
  
        try{
          await kUser.send(embed)
        }catch(e){
        }

       	let banchannel = message.guild.channels.cache.get('860180763210153987').send(kickEmbed)

          message.channel.send(`:white_check_mark: **|** Você expulsou o usuário ${kUser.user.tag}.`)
}

module.exports.help = {
    name: "kick"
}