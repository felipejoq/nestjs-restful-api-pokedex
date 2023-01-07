export const EnvConfig = () => ({
  environments: process.env.NODE_ENV || 'dev',
  mongoDb: process.env.MONGO_DB,
  port: process.env.PORT || 3000,
  defaultLimit: +process.env.DEFAULT_LIMIT || 20,
});
