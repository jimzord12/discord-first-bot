import { ChatInputCommandInteraction, type SlashCommandOptionsOnlyBuilder } from 'discord.js';
import type { Result } from 'neverthrow';

export interface DiscordCommand {
  data: SlashCommandOptionsOnlyBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<Result<unknown, unknown>>; // ChatGPT Issue Fix 3
}
