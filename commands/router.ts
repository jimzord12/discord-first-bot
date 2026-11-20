import type { ChatInputCommandInteraction } from 'discord.js';
import * as commands from '.';
import { err, ok } from 'neverthrow';
import { AppError } from '../errors/errors';

const _commands = Object.entries(commands).map(([, v]) => [v.data.name, v] as const);

const commandsMap = new Map(_commands); // ChatGPT #2 Issue Fix

export const commandsRouter = (interaction: ChatInputCommandInteraction) => {
  const name = interaction.commandName;
  const command = commandsMap.get(name);

  if (command) return ok(command);
  return err(new AppError('command not found', 'INVALID_INPUT'));
};
