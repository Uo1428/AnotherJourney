const fs = require('fs');
const { PermissionsBitField } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const config = require(`${process.cwd()}/Assets/Config/config.js`);
const set = require(`${process.cwd()}/Assets/Config/settings`);
require("colors");
module.exports = {
  async execute(client) {
    const TOKEN = config.TOKEN;
    const CLIENT_ID = client.config.CLIENT_ID;
    const GUILD_ID = client.config.SUPPORT_SERVER;
    const rest = new REST({ version: '9' }).setToken(TOKEN);
    const slashCommands = [];
    let x = 0;
    fs.readdirSync(`${process.cwd()}/Commands/Slash/`).forEach(async dir => {
      const files = fs.readdirSync(`${process.cwd()}/Commands/Slash/${dir}/`).filter(file => file.endsWith('.js'));

      for (const file of files) {
        const slashCommand = require(`${process.cwd()}/Commands/Slash/${dir}/${file}`);
        slashCommands.push({
          name: slashCommand.name,
          description: slashCommand.description,
          type: slashCommand.type,
          options: slashCommand.options ? slashCommand.options : null,
          default_permission: slashCommand.default_permission ? slashCommand.default_permission : null,
          default_member_permissions: slashCommand.default_member_permissions ? PermissionsBitField.resolve(slashCommand.default_member_permissions).toString() : null
        });
        x++;
        if (slashCommand.name) {
          client.slashCommands.set(slashCommand.name, slashCommand)
        } else {
          client.logger(`Command Error: ${slashCommand.name || file.split('.js')[0] || "Missing Name"}`.brightRed)
        }
      }
    });
    (async () => {
      try {
        await rest.put(
          !set.SLASH_GLOBLE ?
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID) :
            Routes.applicationCommands(CLIENT_ID),
          { body: slashCommands }
        ).catch((e) => { console.log((e.message).bold.red) });
        setTimeout(() => {
          client.logger(`Loaded ${x} Slash Commands`.bold)
        }, 1500)
      } catch (error) {
        console.log(error);
      }
    })();
  }
};
