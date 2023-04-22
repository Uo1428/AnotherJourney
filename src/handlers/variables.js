const { slash } = require(`${process.cwd()}/src/functions/cmdErrorLogs.js`);
const { Collection, EmbedBuilder } = require('discord.js');
module.exports = {
  async execute(client) {
    client.config = require(`${process.cwd()}/Assets/Config/config.js`);
    client.embed = require(`${process.cwd()}/Assets/Config/embed.js`);
    client.emotes = require(`${process.cwd()}/Assets/Config/emotes.js`);
    client.slash_err = slash;
    client.slashCommands = new Collection();
    client.categories = new Collection();
    client.cooldowns = new Collection();
    client.commands = new Collection();
    client.buttons = new Collection();
    client.aliases = new Collection();
    client.events = new Collection();
    client.Embed = (footer = true) => {
      let embed = new EmbedBuilder();
      if (!embed.color) embed.setColor(client.embed.color);
      if (footer) embed.setFooter({ text: client.embed.footertext, iconURL: client.embed.footericon });
      return embed;
    };
  }
}