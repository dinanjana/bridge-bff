/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    hscodeRepo
} = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('hsCodeService');

const getHsCodes = () => {
    log.info(`Get all HS Codes of client`);
    const response = hscodeRepo.getHsCodes();
    console.error(response);
    return response;
};

const getHsCode = (id) => {
    log.info(`Get  HS Codes of client`);
    const response = hscodeRepo.getHsCode(id)
    return response;
};

const postHsCode = (body) => {
    log.info(`post HS Codes of ${body}`);
    const response = hscodeRepo.postHsCode(body);
    return response;
};

const putHsCode = (body) => {
    log.info(`post HS Codes of ${body}`);
    const response = hscodeRepo.putHsCode(body)
    return response;
};


const hsCodeService = {
    getHsCodes,
    getHsCode,
    postHsCode,
    putHsCode
};

module.exports = {
    hsCodeService,
};