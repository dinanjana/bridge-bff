const { createRedisClient, login, makeRequest } = require('./ApiRepository');
const { getHsCodes, getHsCode, putHsCode, postHsCode } = require('./HsCodeRepository');
const { getCountryCodes } = require('./CountryRepository');

const userRepo = { login };
const hscodeRepo = { getHsCodes, getHsCode, putHsCode, postHsCode };
const countryRepo = {getCountryCodes};

module.exports = {
  createRedisClient,
  userRepo,
  makeRequest,
  hscodeRepo,
  countryRepo,
};