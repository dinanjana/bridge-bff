const { _ } = require('lodash');
const { user } = require('./user/user');
const { hscode } = require('./hscode');
const { countrycode } = require('./countrycode');
const { regapproval } = require('./regapproval');
const { supplier } = require('./supplier');
const { incoterm } = require('./incoterm');
const { bank } = require('./bank');
const { paymentterm } = require('./paymentterm');
const { tradeagreement } = require('./tradeagreement')

const handlers = { ...user,...hscode, ...countrycode, ...regapproval, ...supplier, ...incoterm, ...bank, ...paymentterm, ...tradeagreement
 };

module.exports = {
  handlers
};