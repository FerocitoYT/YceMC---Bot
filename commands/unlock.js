module.exports = {
    name: "unlock",

    run: async(client, message, args) => {
        let perm = message.member.hasPermission("MANAGE_GUILD");
        let perm_erro_msg = `:x: | ${message.author} Você não possui a permissão **Gerenciar Servidor**.`;
        if (!perm) return message.channel.send(perm_erro_msg);

        let lock = await message.channel.updateOverwrite(message.guild.roles.cache.find(a => a.name.toLowerCase().trim() == "@everyone"),
        {
            SEND_MESSAGES: true
        });
        
        let lock_msg = `✅ ${message.author} Permitiu que vocês mortais falem de novo`

        message.channel.send(lock_msg)
    }

}