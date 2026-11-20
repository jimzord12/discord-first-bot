import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import type { DiscordCommand } from './types';
import { err, ok } from 'neverthrow';
import { AppError } from '../errors/errors';

const data = new SlashCommandBuilder().setName('ping').setDescription('Check if the bot responds');

const execute = async (interaction: ChatInputCommandInteraction) => {
  try {
    await interaction.reply('Pong!');
    return ok();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not send Pong!';
    return err(new AppError(message, 'UNEXPECTED_ERROR'));
  }
};

export const ping = { data, execute } satisfies DiscordCommand;
