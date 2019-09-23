//nishakara

const {bltypesRepo} = require ('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('bltypesService');

const getAll = () => {
    log.info(`Get all B/l types of client`);
    const response = bltypesRepo.getAll();
    return response;
}

const get = (id) => {
    log.info(`Get B/l types of clinet`);
    const response = bltypesRepo.get(id)
    return response;
}

const post = (body) => {
    log.info(`Post B/l types to ${body}`);
    const response = bltypesRepo.post(body)
    return response;
}

const put = (body) => {
    log.info(`Put B/l Types to ${body}`);
    const response = bltypesRepo.post(body)
    return response;
}

const bltypesService = {
    getAll,
    get,
    post,
    put
};

module.exports = {
    bltypesService,
}
