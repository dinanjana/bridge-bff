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

const getHsCodes = async () => {

    const url = ENDPOINTS.HSCODE.base + '/' + client + ENDPOINTS.HSCODE.context;
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

const getHsCode = async (id) => {
    const url = ENDPOINTS.HSCODE.base + '/' + client + ENDPOINTS.HSCODE.context + '/' + id;
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
const postHsCode = async (body) => {
    const url = ENDPOINTS.HSCODE.base + '/' + client + ENDPOINTS.HSCODE.context;
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
        console.error('-------->1');
        console.error(response);
        return response;
    } catch (err) {
        console.error('-------->2');
        console.error(err);
        log.error(` Error occurred while inserting hs code- ${err}`, err);
        throw err;
    }
};

const putHsCode = async (body) => {
    console.error('REPO-------->PUT A');
    const url = ENDPOINTS.HSCODE.base + '/' + client + ENDPOINTS.HSCODE.context;
    console.error('REPO-------->PUT B');
    const headers = {
        'Content-Type': 'application/json',
        'InitiatedBy': username,
        'Client_ID': client
    }
    console.error('REPO-------->PUT C');
    try {
        log.info(`Calling ${url}`);
        console.error('REPO-------->PUT 0');
        const response = await axios.put(url, body, {
            headers: headers
        })
        console.error('REPO-------->PUT 1');
        return response;
    } catch (err) {
        console.error('REPO-------->PUT 2');
        console.error(err)
       
        log.error(`Error occurred while updating hs code- ${err}`, err);
        throw err;
    }
};

module.exports = {
    getHsCodes,
    getHsCode,
    postHsCode,
    putHsCode

};