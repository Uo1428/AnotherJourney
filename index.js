/*
==========| Dont Take Credit
==========| Made By discord.gg/uoaio 
*/

import { Client, GatewayIntentBits, Partials, Collection, PermissionsBitField, EmbedBuilder, ButtonBuilder, ActionRowBuilder } from 'discord.js';
import 'colors';
import { Routes } from 'discord-api-types/v9';
import { createMidjourney } from "replicate-fetch";
import { REST } from '@discordjs/rest';
import express from "express"
const app = express()
keepAlive();
(async () => {
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

  client.slashCommands = new Collection();


  const TOKEN = process.env.TOKEN;
  const CLIENT_ID = process.env.CLIENT_ID;
  const rest = new REST({ version: '9' }).setToken(TOKEN);
  let cmd = []
  console.log("Reloading Commands.....")
  const imagine = {
    name: "imagine",
    description: "Create AI images for free",
    options: [{ name: "prompt", description: "Add promt to make image", type: 3, required: true }],
    type: 1,
  }
  cmd.push(imagine)
  client.slashCommands.set(imagine.name, imagine)
  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: cmd }).then(() => console.log("Reloaded Commands".cyan.bold))
  client.on('interactionCreate', async interaction => {
    const slashCommand = client.slashCommands.get(interaction.commandName);
    if (slashCommand.name !== "imagine") return;
    await interaction.deferReply({ ephemeral: true })
    await interaction.editReply({ content: "## Generating Image, Wait for a while\n\n> *join our discord if wont generate - https://discord.gg/uoaio *" })
    const prompt = interaction.options.getString("prompt")
    let x = await createMidjourney({ prompt });
    if (!x || !x[0]) return interaction.editReply({ content: "Use Another Prompt!" })
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Download")
          .setStyle(5)
          .setURL(x[0])
          .setEmoji("📥"),
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(5)
          .setURL("https://discord.gg/uoaio")
      );

    const embed = new EmbedBuilder()
      .setTitle("AnotherJourney:")
      .setDescription(`**${prompt}**`)
      .setImage(x[0])
    await interaction.editReply({
      embeds: [embed],
      components: [row],
      content: ""
    })
  })
  
client.on("ready", () => console.log("Bot Is Ready. Enjoy"))
  
  await client.login(process.env.TOKEN).catch((error) => {
    console.log((error.message).bold.red);
  });
  
})();

function keepAlive() {
  app.use(express.static("public"));
  app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`<iframe style="margin: 0; padding: 0;" width="100%" height="100%" src="https://uoaio.vercel.app/" frameborder="0" allowfullscreen></iframe>`);
    res.end()
  });
  app.listen(3000, () => {
    console.log("Server is running on 3000".cyan)
  })
}