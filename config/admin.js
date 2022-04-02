module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6ed63f1293057326b1ad676bbc212ad'),
  },
});
