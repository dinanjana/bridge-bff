/**
 * Created by dinanjanag on 5/11/19.
 */
const axios = require('axios');
const redis = require('redis');
const { promisify } = require('util');
const { REDIS, HTTP_METHODS, ENDPOINTS } = require('../conf');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('apiRepository');

let client;

const createRedisClient = () => {
  if (!client) {
    client = redis.createClient(REDIS);
    log.info('Redis connection established');
  }
  client.getAsync = promisify(client.hgetall).bind(client);
  client.setAsync = promisify(client.hmset).bind(client);
  client.setInCache = (userName, val) => {
    client.setAsync(userName, val)
      .then(() => {log.info(`Stored values in cache for ${userName}`);})
      .catch((err) => {log.error(`Failed to save value in cache for ${userName}`, err);});
  };
};

const makeRequest = async (user, service, api, endpoint, method, body) => {
  const userData = await client.getAsync(user);
  if (!userData.token) {
    throw new Error('Not a logged in user');
  }
  let response = null;
  const config = { headers: { 'Authorization': userData.token }};
  const url = `${api.base}${api.base}/${api.endpoint[endpoint].path}`;
  switch(method) {
    case HTTP_METHODS.GET: {
      return axios.get(url, config);
    }
    case HTTP_METHODS.POST: {
      return axios.post(url, body, config);
    }
    case HTTP_METHODS.PUT: {
      return axios.put(url, body, config);
    }
    case HTTP_METHODS.DELETE: {
      return axios.delete(url, config);
    }
    default: {
      return response;
    }
  }
};

const login = async (userName, password) => {
  const body = { userName: userName, password: password };
  const url = `${ENDPOINTS.AUTH.base}${ENDPOINTS.AUTH.endpoints.login.path}`;
  try {
    log.info(`Calling ${url}`);
    const response = await axios.post(url, body);
    if (client && response.status === 200) {
      const val = {
        token: response.headers['authorization']
      };
      client.setInCache(userName, val);
    }
  } catch (err) {
    log.error(`Error occurred while login ${err}`, err);
    console.error(err);
    throw err;
  }
};

module.exports = {
  createRedisClient,
  makeRequest,
  login,
};








