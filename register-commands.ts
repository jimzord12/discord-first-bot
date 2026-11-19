import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { config } from './config';
import { logger } from './logger';

const ping = new SlashCommandBuilder().setName('ping').setDescription('Check if the bot responds');
const repeat = new SlashCommandBuilder()
  .setName('repeat')
  .setDescription('send the same text back')
  .addStringOption(option =>
    option.setName('text').setDescription('the text to repeat').setRequired(true).setMaxLength(255)
  );

const restApi = new REST().setToken(config.token);

// Note, POST -> only 1 command
// For multiple use PUT
// await restApi.post(Routes.applicationGuildCommands(config.applicationId, config.guildId), {
//   body: ping.toJSON(),
// });

const commands = [ping, repeat];

await restApi.put(Routes.applicationGuildCommands(config.applicationId, config.guildId), {
  body: commands.map(c => c.toJSON()),
});

logger.info(
  `Registered ${commands.length} commands: ${commands.map(c => `/${c.name}`).join(', ')}`
);
