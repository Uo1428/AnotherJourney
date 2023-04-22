const { InteractionType, ActionRowBuilder, ButtonBuilder } = require('discord.js'),
  hastebin = require('hastebin-gen');
module.exports = {
  async execute(client) {
    client.on('interactionCreate', interaction => {
      if (interaction.type !== InteractionType.ModalSubmit) return;
      // Eval Command
      if (interaction.customId === 'eval-modal') {
        const code = interaction.fields.getTextInputValue('eval-code');
        String.prototype.replaceAll = function(search, replacement) {
          return this.replace(RegExp(search, 'gi'), replacement);
        };
        client.clean = text => {
          if (typeof text !== 'string') {
            text = require('util').inspect(text, { depth: 0 });
          }
          text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
            .replaceAll(client.token, 'never gonna give you up, never gonna let you down')
          return text;
        };
        try {
          const evaled = client.clean(eval(code));
          if (evaled.length < 800) {
            interaction.reply({ content: `${client.emotes.MESSAGE.y} **Code Output:**\`\`\`xl\n${evaled}\n\`\`\`` })
          } else {
            hastebin(evaled, "js").then(r => {
              const row = new ActionRowBuilder().addComponents([new ButtonBuilder().setLabel('Hastebin').setURL(r).setStyle(5)])
              interaction.reply({ content: `${client.emotes.MESSAGE.y} **Hastebin Output:**`, components: [row] })
            });
          }
        } catch (error) {
          client.slash_err(client, interaction, error);
        }
      }
    })
  }
}