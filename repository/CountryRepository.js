/**
 * Created by Chamath Jeevan on 8/12/19.
 */

const log4js = require('log4js');
const { countries } = require('./countries');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('apiRepository');

const getCountryCodes = () => {
    try {
      return countries;
    } catch (err) {
      log.error(`Error occurred while fetching country codes- ${err}`, err);
      console.error(err);
      throw err;
    }
  };

  module.exports = {
    getCountryCodes,
  };