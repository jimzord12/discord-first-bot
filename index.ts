import { config } from './config.ts';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const { token } = config;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

console.log('starting Discord Client');

client.once(Events.ClientReady, readyClient =>
  console.log(`Discord WS Connection established.
  Bot: ${readyClient.user.bot}
  User Tag: ${readyClient.user.tag}`)
);

client.on(Events.ShardReconnecting, shardId => {
  console.log(`Gateway ${shardId}: reconnecting`);
});

client.on(Events.ShardReady, shardId => {
  console.log(`Gateway ${shardId}: session ready`);
});

client.on(Events.ShardResume, shardId => {
  console.log(`Gateway ${shardId}: session resumed`);
});

client.on(Events.ShardDisconnect, (event, shardId) => {
  console.log(`Gateway ${shardId}: disconnected, code ${event.code}`);
});

client.on(Events.ShardError, (error, shardId) => {
  console.error(`Gateway ${shardId}:`, error.message);
});

await client.login(token);
