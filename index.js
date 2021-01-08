const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	ws: {
		intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING', 'GUILD_MEMBERS']
	}
});
const config = require('./settings.json');
const mongoose = require('mongoose');
const { loadCommands } = require('./utils/loadCommands');

mongoose.connect('MONGODB_URL', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);