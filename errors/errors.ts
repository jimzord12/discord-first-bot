import type { AppErrorCodes } from './enums';

export class AppError extends Error {
  override name = 'AppError';

  constructor(
    message: string,
    public code: AppErrorCodes
  ) {
    super(message);
  }
}
