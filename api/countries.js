/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { countryService } = require('../service/CountryService');
const { PATHS, HTTP_METHODS } = require('../conf');

const getCountriesHandler = (req, res) => {
    console.error('=========> getCountriesHandler');
   return res.send(countryService.getCountries())
};

module.exports = {
    countries: {
        [PATHS.COUNTRYCODE]: [{ method: HTTP_METHODS.GET, handler: getCountriesHandler }],
    }
};