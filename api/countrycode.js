/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { countryService } = require('../service/CountryService');
const { PATHS, HTTP_METHODS } = require('../conf');

const getCountryCodesHandler = (req, res) => {
   return res.send(countryService.getCountryCodes())
};

module.exports = {
    countrycode: {
        [PATHS.COUNTRYCODE]: [{ method: HTTP_METHODS.GET, handler: getCountryCodesHandler }],
    }
};