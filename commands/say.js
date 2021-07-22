const Discord = require("discord.js");

exports.run = async (client, message, args) => {      
  const sayMessage = args.join(' ');
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ **|** Você não tem permissão para utilizar esse comando.`)
  if (!sayMessage) return message.quote(`❌ **|** Você precisa escrever algo para eu falar!`)
  message.delete().catch(O_o => {});

  message.channel.send(`${sayMessage}`,);
}

exports.help = {
    name: "say",
    aliases: ["dizer"],
    description: "Comando para fazer o **Bot** falar alguma coisa.",
    usage: "!!say mensagem <-----",
  };