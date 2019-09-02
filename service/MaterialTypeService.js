/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { materialTypeRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('materialtypeService');

const getAll = () => {
    log.info(`Get all material of client`);
    const response = materialTypeRepo.getAll();
    return response;
};

const get = (id) => {
    log.info(`Get material of client`);
    const response = materialTypeRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post material of ${body}`);
    const response = materialTypeRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post material of ${body}`);
    const response = materialTypeRepo.put(body)
    return response;
};

const materialtypeService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    materialtypeService,
};