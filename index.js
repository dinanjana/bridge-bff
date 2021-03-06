/**
 * Created by dinanjanag on 5/11/19.
 */
const _ = require('lodash');
const express = require('express');
const BodyParser = require("body-parser");
const { handlers } = require('./api');
const log4js = require('log4js');
const { createRedisClient } = require('./repository');
const { HTTP_METHODS } = require('./conf');
var cors = require('cors')
log4js.configure('./conf/log4js.json');
const log = log4js.getLogger('startup');

const app = express();
const port = 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors())
const registerHandlers = () => {
  _.map(handlers, (handlers, path) => {
    _.map(handlers, ({method, handler}) => {
      switch (method) {
        case HTTP_METHODS.POST: {
          app.post(path, handler);
          break;
        }
        case HTTP_METHODS.GET: {
          app.get(path, handler);
          break;
        }
        case HTTP_METHODS.DELETE: {
          app.delete(path, handler);
          break;
        }
        case HTTP_METHODS.PUT: {
          app.put(path, handler);
          break;
        }
      }
      log.info(`registered handle with path [${path}] method [${method}]`);
    });
  });
};

app.get('/', (req, res) => res.send('Hello World!'));

registerHandlers();

createRedisClient();

app.listen(port, () => {
  //init();
  console.log(`App listening on port ${port}!`);
  log.info(`App listening on port ${port}!`)
});