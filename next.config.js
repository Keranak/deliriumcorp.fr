const nextCors = require('next-cors');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextCors(nextConfig, {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
});
