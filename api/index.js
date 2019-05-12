const { _ } = require('lodash');
const { user } = require('./user');

const handlers = { ...user };

module.exports = {
  handlers
};