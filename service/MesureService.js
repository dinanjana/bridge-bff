/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const { mesureRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('supplierService');

const getAll = () => {
    console.error('========> 3');
    log.info(`Get all material of client`);
    const response = mesureRepo.getAll()
    return response;
};

const get = (id) => {
    log.info(`Get material of client`);
    const response = mesureRepo.get(id)
    return response;
};

const post = (body) => {
    log.info(`post material of ${body}`);
    const response = mesureRepo.post(body);
    return response;
};

const put = (body) => {
    log.info(`post material of ${body}`);
    const response = mesureRepo.put(body)
    return response;
};

const mesureService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    mesureService,
};