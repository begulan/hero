module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'seconddb'),
      user: env('DATABASE_USERNAME', 'strapiadmin'),
      password: env('DATABASE_PASSWORD', 'adminadmin'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
