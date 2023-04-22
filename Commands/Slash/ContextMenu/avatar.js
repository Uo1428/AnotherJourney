const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle, Formatters } = require('discord.js');
module.exports = {
  name: "Avatar",
  description: "",
  usage: "",
  category: "",
  userPerms: [""],
  botPerms: [""],
  cooldown: 5,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: 2,
  run: async (client, interaction) => {
    try {
      const user = interaction.targetUser;
      let embed = client.Embed()   
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setAuthor({name: `• ${user.username}'s Avatar`, url: "https://discord.gg/pXRT2FusPb", iconURL: client.embed.authoricon})
            .setDescription(`*Click the button below to download!*`)
            .setImage(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png" })); 
      const row = new ActionRowBuilder()
        .addComponents([
          new ButtonBuilder() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setEmoji(`955381268583940106`) .setStyle(5),
          new ButtonBuilder() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "jpg"})) .setLabel("JPG") .setEmoji(`955381268583940106`) .setStyle(5),
          new ButtonBuilder() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "webp"})) .setLabel("WEBP") .setEmoji(`955381268583940106`) .setStyle(5),
          new ButtonBuilder() .setURL(user.displayAvatarURL({ size: 2048, dynamic: true, format: "gif"})) .setLabel("GIF") .setEmoji(`955381268583940106`) .setStyle(5)
        ])
      interaction.reply({ embeds: [embed], components: [row], ephemeral: true});
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
