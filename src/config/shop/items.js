const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Opens the shop website'),

    async execute(interaction) {
        const button = new ButtonBuilder()
            .setLabel('Open Shop')
            .setStyle(ButtonStyle.Link)
            .setURL('https://www.google.com/search?q=67%5D&oq=67&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhBFGDwyBggHEEUYPNIBBzQ2MWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8');

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.reply({
            content: 'Click below to open the shop',
            components: [row],
            ephemeral: true
        });
    }
};
