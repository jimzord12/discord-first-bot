type ErrorCodeDetails = { index: string; severity: 'low' | 'med' | 'high' | 'critical' };

export const appErrorCodes = [
  'INVALID_INPUT',
  'CHANNEL_NOT_CONFIGURED',
  'BOT_MISSING_PERMISSIONS',
  'UNEXPECTED_ERROR',
] as const;

export const appErrorCodesWithDetails = {
  INVALID_INPUT: { index: '001', severity: 'low' },
  CHANNEL_NOT_CONFIGURED: { index: '002', severity: 'med' },
  BOT_MISSING_PERMISSIONS: { index: '003', severity: 'med' },
  UNEXPECTED_ERROR: { index: '004', severity: 'high' },
} as const satisfies Record<(typeof appErrorCodes)[number], ErrorCodeDetails>;

export type AppErrorCodes = (typeof appErrorCodes)[number];
