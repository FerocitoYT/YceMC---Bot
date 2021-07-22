const fs = require('fs');
module.exports = (bot, message, config) => {

    bot.loadCommand = (commandName) => {
        try {
            let props = require(`../commands/${commandName}`);
            if (props.init) props.init(bot);
            bot.commands.set(commandName, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
            return false;
        } catch (err) {
            return (`Erro! ${err}`);
        }
    };

    bot.unloadCommand = async (commandName) => {
        try {
            if (!commandName) return

            if (commandName.shutdown) await commandName.shutdown(bot);
            delete require.cache[require.resolve(`../commands/${commandName}.js`)];
            return false;
        } catch (err) {
            return (`Erro! ${err}`);
        }
    }}