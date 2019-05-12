const { createRedisClient, login, makeRequest } = require('./ApiRepository');

const userRepo = { login };

module.exports = {
  createRedisClient,
  userRepo,
  makeRequest,
};