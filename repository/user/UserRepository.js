/**
 * Created by dinanjanag on 5/11/19.
 */

const { ENDPOINTS, ERROR_CODES, HTTP_METHODS, OPS } = require('../../conf/index');
const { makeRequest, pages, getHeaders } = require('../ApiRepository');

const createUser = async (user) =>
  makeRequest(null, ENDPOINTS.USER, 'users', HTTP_METHODS.GET, user, getHeaders(OPS.write, pages.USER_REGISTRATION), false);

module.exports = {
  createUser,
};