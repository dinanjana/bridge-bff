/**
 * Created by dinanjanag on 5/11/19.
 */
const { userRepo } = require('../repository');
const log4js = require('log4js');

log4js.configure(require('../conf/log4js.json'));
const log = log4js.getLogger('userService');


const loginUser = (user, password) => {
  log.info(`Login in user ${user}`);
  return userRepo.login(user, password);
};

const userService = {
  loginUser,
};

module.exports = {
  userService,
};