const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

    if(args[0] == 'set') {
      var d = ["360272364950388736", "319652568160534542"]

      if(!d.includes(message.author.id)) return;
  
      let evento = args.slice(1).join(" ");
    if(!evento) return message.reply('Registre o nome do evento')
    message.reply('O próximo evento foi setado.')
    db.set(`proxevento`, `${evento}`)
    }else {
      let evento = db.get('proxevento')
      if(evento == null) evento = 'Ainda não foi registrado nenhum evento.'
      message.channel.send(evento)
    }
    

}

module.exports.help = {
    name: 'evento',
    aliases: []

}