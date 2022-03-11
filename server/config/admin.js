module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ff9a7784aac6297f75d14a760ec7689'),
  },
});
