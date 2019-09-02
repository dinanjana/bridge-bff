/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    materialtypeService } = require('../service/MaterialTypeService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');
const { ERROR_CODES } = require('../conf/ErrorCodes');

const getHandler = (req, res) => {
    try {
        if (req.params.id !== null && typeof req.params.id !== 'undefined') {
            materialtypeService.get(req.params.id).then(function (result) {
                return res.status(result.status).send(result.data);
            }).catch(function (error) {
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            });
        } else {
            materialtypeService.getAll().then(function (result) {
                return res.status(result.status).send(result.data);
            }).catch(function (error) {
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            });
        }
    } catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
};

const postHandler = (req, res) => {

    try {
        materialtypeService.post(req.body).then(function (result) {

            return res.status(result.status).send(result.data);

        }).catch(function (error) {
            console.error(error);
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        });
    } catch (error) {
        console.error(error);
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
};

const putHandler = (req, res) => {
    try {
        materialtypeService.put(req.body).then(function (result) {
            return res.status(result.status).send(result.data);

        }).catch(function (error) {
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        });
    } catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
};

module.exports = {
    materialtype: {
        [PATHS.MATERIALTYPE]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        },
        {
            method: HTTP_METHODS.POST,
            handler: postHandler
        },
        {
            method: HTTP_METHODS.PUT,
            handler: putHandler
        }
        ],
        [PATHS.MATERIALTYPE_ID]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        }]
    }
};