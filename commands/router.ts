import type { ChatInputCommandInteraction } from 'discord.js';
import * as commands from '.';
import { err, ok } from 'neverthrow';

const _commands = Object.entries(commands).map(([k, v]) => [v.data.name, v]);

const commandsMap = new Map(Object.entries(_commands)); // ChatGPT #2 Issue Fix

export const commandsRouter = (interaction: ChatInputCommandInteraction) => {
  const name = interaction.commandName;
  const command = commandsMap.get(name);

  if (command) return ok(command);
  err(new Error('command not found'));
};
