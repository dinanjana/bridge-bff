/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { supplierRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('supplierService');

const getAll = () => {
    log.info(`Get all supplier of client`);
    const response = supplierRepo.getAll();
    return response;
};

const get = (id) => {
    log.info(`Get supplier of client`);
    const response = supplierRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post supplier of ${body}`);
    const response = supplierRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post supplier of ${body}`);
    const response = supplierRepo.put(body)
    return response;
};

const supplierService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    supplierService,
};