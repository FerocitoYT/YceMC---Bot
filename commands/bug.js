const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
let canal = client.channels.cache.get("867841021845176342")
let bug = args.join(' ');
if(!bug) {
return message.channel.send({embed: {
description: "Use !!bug <descrição do bug>",
color: "BLUE"
}
});
}
let embed = new Discord.MessageEmbed()
.setTitle("Novo Bug reportado")
.setThumbnail(client.user.displayAvatarURL())
.addField("Reportado por:", `${message.author}`)
.addField("ID de quem reportou", `${message.author.id}`)
.addField("Bug:", `\`${bug}\``)
.setColor([255,182,193])
canal.send(embed)

message.channel.send({embed: {
description: " Seu bug foi reportado, obrigado por ajudar a melhorar a YceMC!",
color: "BLUE"
}
});
}