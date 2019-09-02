/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    materialService } = require('../service/MaterialService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');
const { ERROR_CODES } = require('../conf/ErrorCodes');

const getHandler = (req, res) => {
    try {
        if (req.params.id !== null && typeof req.params.id !== 'undefined') {
            materialService.get(req.params.id).then(function (result) {
                return res.status(result.status).send(result.data);
            }).catch(function (error) {
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            });
        } else {
            materialService.getAll().then(function (result) {
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
        materialService.post(req.body).then(function (result) {

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
        materialService.put(req.body).then(function (result) {
            return res.status(result.status).send(result.data);

        }).catch(function (error) {
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        });
    } catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
};

module.exports = {
    material: {
        [PATHS.MATERIAL]: [{
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
        [PATHS.MATERIAL_ID]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        }]
    }
};