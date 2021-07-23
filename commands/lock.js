module.exports = {
    name: "lock",

    run: async(client, message, args) => {
        let perm = message.member.hasPermission("MANAGE_GUILD");
        let perm_erro_msg = `:x: | ${message.author} Você deve possuir a permissão **Gerenciar Servidor** para executar este comando.`;
        if (!perm) return message.channel.send(perm_erro_msg);

        let lock = await message.channel.updateOverwrite(message.guild.roles.cache.find(a => a.name.toLowerCase().trim() == "@everyone"),
        {
            SEND_MESSAGES: false
        });
        
        let lock_msg = `Este canal está trancado até segunda ordem!`

        message.channel.send(lock_msg)
    }

}