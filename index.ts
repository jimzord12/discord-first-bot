import { config } from './config.ts';
import { Client, GatewayIntentBits, Events } from 'discord.js';
import { logger } from './logger.ts';
import { commandsRouter } from './commands/router.ts';

const { token } = config;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

logger.info('Starting Discord client');

client.once(Events.ClientReady, readyClient => {
  logger.info({ userTag: readyClient.user.tag }, 'Discord client ready');
});

client.on(Events.ShardReconnecting, shardId => {
  logger.info({ shardId }, 'Gateway reconnecting');
});

client.on(Events.ShardReady, shardId => {
  logger.info({ shardId }, 'Gateway session ready');
});

client.on(Events.ShardResume, shardId => {
  logger.info({ shardId }, 'Gateway session resumed');
});

client.on(Events.ShardDisconnect, (event, shardId) => {
  logger.warn({ shardId, closeCode: event.code }, 'Gateway disconnected');
});

client.on(Events.ShardError, (error, shardId) => {
  logger.error({ shardId, errorMessage: error.message }, 'Gateway error');
});

await client.login(token);

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const result = commandsRouter(interaction);

  result?.match(
    command => command.execute(interaction), // what to do if the result is ok
    error => logger.error(error)
    // ... if its not ok
  );

  // -- Old Code
  // // Command: /ping
  // if (interaction.commandName === 'ping') {
  // }

  // // Command: /repeat
  // if (interaction.commandName === 'repeat') {
  //   try {
  //   } catch (error) {
  //     logger.error(`Failed to handle /${interaction.commandName}:`, error);
  //   }
  // }
});
