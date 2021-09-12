const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
         
      message.channel.send(`🏓 Pong! ${Date.now() - message.createdTimestamp} ms.`);

};

module.exports.help = {
    name: 'ping',
    aliases: []
};