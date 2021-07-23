const Discord = require("discord.js");
module.exports = {
    name: "clear",

run: async(client, message, args) => {

    let author = message.author;
    let msg_erro_sem_perm = "Você não possui permissão para usar esse comando!";
    let numeros = args[0];

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${author} ${msg_erro_sem_perm}.`);

  const contador_msg_del = parseInt(args[0], 10);

  let msg_erro_msgs_del = "Insira um número entre 1-99.";
  if (!contador_msg_del || contador_msg_del < 1 || contador_msg_del > 99) return message.channel.send(`:x: | ${author} ${msg_erro_msgs_del}`);
  const apagando_msg = await message.channel.messages.fetch({
    limit: contador_msg_del + 1
  });
  message.channel.bulkDelete(apagando_msg);
  let msg_embed = new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`${author} apagou \`${numeros}\` mensagens!`) .setFooter(`Chat limpo!`, "https://media.tenor.com/images/0b60c301b5209c27fd98ebbb489c87c9/tenor.gif")
  message.channel.send(msg_embed).then(msg => msg.delete({timeout: 9000}))
}};