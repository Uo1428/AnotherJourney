const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
require(`colors`)
const client = new Client({
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});


[`variables`, `extraEvents`, `checker`, `server`, 'slashCommand', 'events', `antiCrash`].forEach((handler) => {
  const file = require(`./src/handlers/${handler}`)
  if (file.execute) file.execute(client);
  else file(client);
});

client.login(process.env.TOKEN).catch((error) => { console.log((error.message).bold.red) });


module.exports = client;
