const { createRedisClient, login, makeRequest } = require('./ApiRepository');
const { getHsCodes, getHsCode, putHsCode, postHsCode } = require('./HsCodeRepository');
const { getCountryCodes } = require('./CountryRepository');
const approvalsRepo = require('./RegapprovalRepository');
const { getAll, get, put, post} = require('./SupplierRepository');
const incotermRepo = require('./IncotermRepository');
const bankRepo = require('./BankRepository');
const paymenttermRepo = require('./PaymenttermRepository');
const tradeAgreementRepo = require('./TradeAgreementRepository');

const userRepo = { login };
const hscodeRepo = { getHsCodes, getHsCode, putHsCode, postHsCode };
const countryRepo = {getCountryCodes};
const supplierRepo = { getAll, get, put, post};

module.exports = {
  createRedisClient,
  userRepo,
  makeRequest,
  hscodeRepo,
  countryRepo,
  approvalsRepo,
  supplierRepo,
  incotermRepo,
  bankRepo,
  paymenttermRepo,
  tradeAgreementRepo
};