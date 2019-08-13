const { _ } = require('lodash');
const { user } = require('./user');
const { hscode } = require('./hscode');
const { countrycode } = require('./countrycode');

const handlers = { ...user,...hscode, ...countrycode };

module.exports = {
  handlers
};