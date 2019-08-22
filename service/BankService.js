/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { bankRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('incotermService');

const getAll = () => {
    log.info(`Get all supplier of client`);
    const response = bankRepo.getAll();
    console.error(response);
    return response;
};

const get = (id) => {
    log.info(`Get supplier of client`);
    const response = bankRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post supplier of ${body}`);
    const response = bankRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post supplier of ${body}`);
    const response = bankRepo.put(body)
    return response;
};

const bankService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    bankService,
};