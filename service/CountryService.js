/**
 * Created by Chamath Jeevan on 8/11/19.
 */

const {countriesRepo } = require('../repository');

const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('countryService');

const getCountries = () => {
    log.info(`Get all countries of client`);
    const response = countriesRepo.getCountries()
    return response;
};

const countryService = {
    getCountries,
};

module.exports = {
    countryService,
};