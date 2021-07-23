const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {

if(args[0] == 'set') {
      var d = ["360272364950388736", "319652568160534542"]
      if(!d.includes(message.author.id)) return;
  
      let evento = args.slice(1).join(" ");
    if(!evento) return message.reply('Registre o nome do evento')
    message.reply('O próximo evento foi registrado.')
    db.set(`proxevento`, `${evento}`)


    }else if(args[0] == 'del') {
            var d = ["360272364950388736", "319652568160534542"]
      if(!d.includes(message.author.id)) return;

      let evento = db.delete('proxevento')
      let einfo = db.delete('infoevento')
      if(evento == null) evento = 'Ainda não foi registrado nenhum evento.'
      message.channel.send('O evento atual foi deletado da database.')


    }else if(args[0] == 'info'){
            
            
            var d = ["360272364950388736", "319652568160534542"]
      if(!d.includes(message.author.id)) return;

      let einfo = args.slice(1).join(" ");
      if(!einfo) return message.channel.send('Registre as informações do evento.')
      message.reply('As informações do evento foram registradas.')

      db.set('infoevento', `${einfo}`)
    
    
    }else{

            let evento = db.get('proxevento')
            let einfo = db.get('infoevento')
      if(evento == null) return message.channel.send('Ainda não foi registrado nenhum evento.')
      if(einfo == null) einfo = 'Ainda não foram registradas as informações do evento atual.'

  let eventoembed = new Discord.MessageEmbed()
  .setTitle('Novo evento disponível!')
  .addField('Evento:', `${evento}`)
  .addField('Informações do evento:', `${einfo}`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
  .setColor('RANDOM')
  .setTimestamp();

  message.channel.send(eventoembed)

    }
    

}

module.exports.help = {
    name: 'evento',
    aliases: []

}