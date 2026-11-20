import { logger } from '../logger';
import { AppError } from './errors';

export const handleCommandError = (commandName: string, error: unknown) => {
  if (error instanceof AppError) {
    const { code } = error;
    logger.error('Command failed', { commandName, code }, error.message);
    return;
  }

  if (error instanceof Error) {
    logger.error('Command failed', {
      commandName,
      code: 'UNEXPECTED_ERROR',
      errorMessage: error.message,
    });
  }
};
