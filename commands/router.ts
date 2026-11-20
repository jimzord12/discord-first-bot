import type { ChatInputCommandInteraction } from 'discord.js';
import * as commands from '.';
import { err, ok } from 'neverthrow';

const commandsMap = new Map(Object.entries(commands));

export const commandsRouter = (interaction: ChatInputCommandInteraction) => {
  const name = interaction.commandName;
  const command = commandsMap.get(name);

  if (command) return ok(command);
  err(new Error('command not found'));
};
