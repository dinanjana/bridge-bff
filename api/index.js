const { _ } = require('lodash');
const { user } = require('./user');
const { hscode } = require('./hscode');
const { countries } = require('./countries');
const { regapproval } = require('./regapproval');
const { supplier } = require('./supplier');
const { incoterm } = require('./incoterm');
const { bank } = require('./bank');
const { paymentterm } = require('./paymentterm');
const { tradeagreement } = require('./tradeagreement')
const { material } = require('./material')
const { materialtype } = require('./materialtype')
const { mesure } = require('./mesure')
const { bltypes } = require('./bltypes')
//const { stakeholder } = require('./stakeholder');
const { stakeHolder } = require('./stakeHolder') 

const handlers = { ...user,...hscode, ...countries, ...regapproval, ...supplier, ...incoterm, ...bank, ...paymentterm, ...tradeagreement, ...material, ...materialtype, ...mesure, ...bltypes, ...stakeHolder
 };

module.exports = {
  handlers
};