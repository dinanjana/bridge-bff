/**
 * Created by dinanjanag on 5/11/19.
 */
const { userService } = require('../service');
const { PATHS, HTTP_METHODS } = require('../conf');


const loginHandler = (req, res) => {
  userService.loginUser(req.body.userName, req.body.password)
  .then(result => res.status(200).send())
  .catch(err => res.status(401).send(err));
};

module.exports = {
  user: {
    [PATHS.LOGIN]: [{ method: HTTP_METHODS.POST, handler: loginHandler }]
  }
};