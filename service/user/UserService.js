/**
 * Created by dinanjanag on 5/11/19.
 */
const { userRepo } = require('../../repository/index');
const log4js = require('log4js');

log4js.configure(require('../../conf/log4js.json'));
const log = log4js.getLogger('userService');


const loginUser = (user, password) => {
  log.info(`Login in user ${user}`);
  return userRepo.login(user, password);
};

const createUser = (user) => {
  log.info(`Create user ${user.userName}`);
  return userRepo.createUser(user);
};

const userService = {
  loginUser,
  createUser,
};

module.exports = {
  userService,
};