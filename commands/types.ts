import { type SlashCommandOptionsOnlyBuilder } from 'discord.js';

export interface DiscordCommand {
  data: SlashCommandOptionsOnlyBuilder;
  execute: CallableFunction;
}
