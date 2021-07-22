const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    var d = ["360272364950388736", "319652568160534542"]

    if(!d.includes(message.author.id)) return;

    let command = args[0];
    if (!command) return message.channel.send('Digite o nome do arquivo do comando que deseja reiniciar.');

    let response = await bot.unloadCommand(command);

    response = bot.loadCommand(command);

    return message.channel.send(`O comando **${command}** foi reiniciado.`);
};

module.exports.help = {
    name: 'reload',
    aliases: []
};