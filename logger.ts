import { Logger } from 'tslog';
import { fileTransport } from 'tslog/transports/file';

export const logger = Logger.fromEnv({ name: 'discord-bot' });

logger.attachTransport(
  fileTransport({ path: './errors.jsonl', format: 'json', minLevel: 'ERROR', append: true })
);
