import { SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import type { DiscordCommand } from './types';
import { err, ok } from 'neverthrow';
import { AppError } from '../errors/errors';

const data = new SlashCommandBuilder()
  .setName('repeat')
  .setDescription('send the same text back')
  .addStringOption(option =>
    option.setName('text').setDescription('the text to repeat').setRequired(true).setMaxLength(255)
  );

const execute = async (interaction: ChatInputCommandInteraction) => {
  try {
    const userText = interaction.options.getString('text', true);
    await interaction.reply({ content: userText, allowedMentions: { parse: [] } });
    return ok();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not call repeat';
    return err(new AppError(message, 'UNEXPECTED_ERROR'));
  }
};

export const repeat = { data, execute } satisfies DiscordCommand;
