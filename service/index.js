const { userService } = require('./user/UserService');
const { countryService } = require('./CountryService');
const { approvalsService } = require('./RegapprovalService');
const { supplierService } = require('./SupplierService');
const { incotermService } = require('./IncotermService');
const { bankService } = require('./BankService');
const { paymenttermService } = require('./PaymenttermService');
const { tradeAgreementService } = require('./TradeAgreementService');


module.exports = {
  userService,
  countryService,
  approvalsService,
  supplierService,
  incotermService,
  bankService,
  paymenttermService,
  tradeAgreementService
};

