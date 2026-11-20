import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { logger } from '../logger';
import type { DiscordCommand } from './types';
import { err, ok } from 'neverthrow';

const data = new SlashCommandBuilder().setName('ping').setDescription('Check if the bot responds');

const execute = async (interaction: ChatInputCommandInteraction) => {
  try {
    await interaction.reply('Pong!');
    return ok();
  } catch (error) {
    logger.error(`Failed to handle /${interaction.commandName}:`, error);
    return err(error);
  }
};

export const ping = { data, execute } satisfies DiscordCommand;
