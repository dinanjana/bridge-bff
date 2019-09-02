/**
 * Created by dinanjanag on 5/11/19.
 */
const { userService } = require('../../service/index');
const { PATHS, HTTP_METHODS } = require('../../conf/index');


const loginHandler = (req, res) => {
  userService.loginUser(req.body.userName, req.body.password)
  .then(resuslt => res.status(200).send())
  .catch(err => res.status(401).send(err));
};

const registerUser = (req, res) => {
  userService.createUser(req.body)
  .then(result => res.status(201).send())
  .catch(err => res.status(401).send(err))
};




module.exports = {
  user: {
    [PATHS.LOGIN]: [{ method: HTTP_METHODS.POST, handler: loginHandler }],
    [PATHS.USER]: [{ method: HTTP_METHODS.POST, handler: registerUser }]
  }
};