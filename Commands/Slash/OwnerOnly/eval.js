const { ModalBuilder, TextInputBuilder, TextInputStyle, ApplicationCommandType, ActionRowBuilder } = require("discord.js")
module.exports = {
  name: "eval",
  description: "Evalulate a peice of code",
  usage: "/eval",
  category: "ownerOnly",
	userPerms: [""],
	botPerms: [""],
	cooldown: 0,
  guildOnly: false,
  ownerOnly: true,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ModalSubmit,
	run: async (client, interaction) => {
    try{
      const modal = new ModalBuilder() .setCustomId(`eval-modal`).setTitle(`Eval code`);
      const input = new TextInputBuilder() .setCustomId('eval-code').setLabel('Input code to eval').setStyle(2).setMinLength(1).setPlaceholder('Code here...').setRequired(true);
      const firstActionRow = new ActionRowBuilder().addComponents(input);
      modal.addComponents(firstActionRow);
      await interaction.showModal(modal);
    } catch(error){
      client.slash_err(client, interaction, error);
    }
  },
};