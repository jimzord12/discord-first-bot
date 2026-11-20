import { ChatInputCommandInteraction, type SlashCommandOptionsOnlyBuilder } from 'discord.js';
import type { Result } from 'neverthrow';
import type { AppError } from '../errors/errors';

export interface DiscordCommand {
  data: SlashCommandOptionsOnlyBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<Result<void, AppError>>; // ChatGPT Issue Fix 3
}
