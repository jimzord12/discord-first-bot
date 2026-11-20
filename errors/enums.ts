type ErrorCodeDetails = { index: string; severity: 'low' | 'med' | 'high' | 'critical' };

const appErrorCodes = {
  INVALID_INPUT: { index: '001', severity: 'low' },
  CHANNEL_NOT_CONFIGURED: { index: '002', severity: 'med' },
  BOT_MISSING_PERMISSIONS: { index: '003', severity: 'med' },
  UNEXPECTED_ERROR: { index: '004', severity: 'high' },
} as const satisfies Record<string, ErrorCodeDetails>;

export type AppErrorCodes = keyof typeof appErrorCodes;
