import { logger } from '../logger';
import { AppError } from './errors';

export const handleCommandError = (commandName: string, error: unknown, message?: string) => {
  if (error instanceof AppError) {
    const { code } = error;
    logger.error('Command failed', { commandName, code }, message);
  }
};
