function requireEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const config = {
  token: requireEnv("DISCORD_TOKEN"),
  applicationId: requireEnv("DISCORD_APPLICATION_ID"),
  guildId: requireEnv("DISCORD_GUILD_ID"),
};