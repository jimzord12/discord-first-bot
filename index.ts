import { config } from './config.ts';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const { token } = config;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient =>
  console.log(`Discord WS Connection established.
  Bot: ${readyClient.user.bot}
  User Tag: ${readyClient.user.tag}`)
);

client.login(token);
