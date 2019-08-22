/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { approvalsRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('hsCodeService');

const getAll = () => {
    log.info(`Get all HS Codes of client`);
    const response = approvalsRepo.getAll();
    console.error(response);
    return response;
};

const get = (id) => {
    log.info(`Get  HS Codes of client`);
    const response = approvalsRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post HS Codes of ${body}`);
    const response = approvalsRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post HS Codes of ${body}`);
    const response = approvalsRepo.put(body)
    return response;
};


const approvalsService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    approvalsService,
};