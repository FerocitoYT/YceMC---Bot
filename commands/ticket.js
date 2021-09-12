const { Client, Message } = require("discord.js")

module.exports = {
    name: "ticket",

    run: async(client, message, args) => {

        message.delete()

        const ticket = message.guild.channels.cache.find(ch => ch.name === `${message.author.id}`);

        if (ticket) return message.channel.send(`:x: | ${message.author} Seu ticket atual já está aberto em: ${ticket}!`).then(msg => msg.delete({timeout: 10000}));

        message.guild.channels.create(`${message.author.id}`, {
            type : 'text', parent : '860180763433369628',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                },
                {
                    id : '860180762263289878',
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            message.channel.send(`✅ | ${message.author} Ticket criado com sucesso: ${channel}`).then(msg => msg.delete({timeout: 10000}));
            channel.send(`Bem-Vindo ${message.author}, espere algum Staff responder. 
Para fechar seu ticket, utilize **!!close**.`)
        })
    }
}