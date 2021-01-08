const mongoose = require('mongoose');
const GuildModel = require('../models/guildid');

module.exports.run = async (bot, message, args) => {
    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(bot.ws.ping)

    message.channel.send(`<a:check:772282559723339826> Proxy is working fine!\`\`\`js\nlatency: ${yourping}ms\nAPI latency: ${yourping}ms\`\`\``)
}

module.exports.config = {
    name: "test",
    aliases: ['latency', 'ping']
}
