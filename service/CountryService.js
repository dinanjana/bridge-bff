/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { countryRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('countryService');

const getCountryCodes = () => {
    log.info(`Get all HS Codes of client`);
    const response = countryRepo.getCountryCodes();
    console.error(response);
    return response;
};

const countryService = {
    getCountryCodes,
};

module.exports = {
    countryService,
};