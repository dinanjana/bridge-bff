/**
 * Created by dinanjanag on 5/11/19.
 */
const axios = require('axios');
const redis = require('redis');
const {
    promisify
} = require('util');
const {
    REDIS,
    HTTP_METHODS,
    ENDPOINTS
} = require('../conf');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('apiRepository');

const client = '6e65ad20-d576-43f2-95fa-19daf959070d';

const username = 'UAT USER';

const getAll = async () => {

    const url = ENDPOINTS.REGAPPROVAL.base + '/' + client + ENDPOINTS.REGAPPROVAL.context;
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        return response;
    } catch (err) {
        log.error(`Error occurred while fetching hs code- ${err}`, err);
        console.error(err);
        throw err;
    }
};

const get = async (id) => {
    const url = ENDPOINTS.REGAPPROVAL.base + '/' + client + ENDPOINTS.REGAPPROVAL.context + '/' + id;
    try {
        log.info(`Calling ${url}`);
        const response = await axios.get(url);
        return response;
    } catch (err) {
        log.error(`Error occurred while fetching hs code- ${err}`, err);
        console.error(err);
        throw err;
    }
};
const post = async (body) => {
    const url = ENDPOINTS.REGAPPROVAL.base + '/' + client + ENDPOINTS.REGAPPROVAL.context;
    const headers = {
        'Content-Type': 'application/json',
        'InitiatedBy': username,
        'Client_ID': client
    }
    try {
        log.info(`Calling ${url}`);
        const response = await axios.post(url, body, {
            headers: headers
        })
        return response;
    } catch (err) {
        log.error(` Error occurred while inserting hs code- ${err}`, err);
        throw err;
    }
};

const put = async (body) => {
    const url = ENDPOINTS.REGAPPROVAL.base + '/' + client + ENDPOINTS.REGAPPROVAL.context;
    const headers = {
        'Content-Type': 'application/json',
        'InitiatedBy': username,
        'Client_ID': client
    }
    try {
        log.info(`Calling ${url}`);
        const response = await axios.put(url, body, {
            headers: headers
        })
        return response;
    } catch (err) {
        log.error(`Error occurred while updating hs code- ${err}`, err);
        throw err;
    }
};

module.exports = {
    getAll,
    get,
    post,
    put

};