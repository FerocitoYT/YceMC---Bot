const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

  var d = ["360272364950388736", '319652568160534542']

        if(!d.includes(message.author.id)) return;

   const del = args[0]
  if(!del) return message.channel.send(`Digite a key/string da database.`)

  db.delete(del)
	message.channel.send('Database deletada.')

};

module.exports.help = {
    name: 'deldb',
    aliases: []
};