import { REST, Routes, type SlashCommandOptionsOnlyBuilder } from 'discord.js';
import { config } from './config';
import { logger } from './logger';
import * as commands from './commands';

const restApi = new REST().setToken(config.token);

// Note, POST -> only 1 command
// For multiple use PUT
// await restApi.post(Routes.applicationGuildCommands(config.applicationId, config.guildId), {
//   body: ping.toJSON(),
// });

const commandData: SlashCommandOptionsOnlyBuilder[] = Object.values(commands).map(c => c.data);

await restApi.put(Routes.applicationGuildCommands(config.applicationId, config.guildId), {
  body: commandData.map(c => c.toJSON()),
});

logger.info(
  `Registered ${commandData.length} commands: ${commandData.map(c => `/${c.name}`).join(', ')}`
);
