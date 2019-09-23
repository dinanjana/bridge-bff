//nishakara

const {
    stakeholderService } = require('../service/StakeholderService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');
const { ERROR_CODES} = require('../conf/ErrorCodes');



const getHandler = (req, res) => {
    console.log('stake0')
    try {
        console.log('stake0.0')
        if (req.params.ID !== null && typeof req.params.ID !== 'undefined') {
            stakeholderService.get(req.params.ID).then(function (result) {
                return res.status(result.status).send(result.data);
            }).catch(function (error) {
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            });

            console.error('stake1')
        }
        else {
            stakeholderService.getAll().then(function (result) {
                return res.status(result.status).send(result.data);
            }).catch(function (error) {
                return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
            });
            console.error('stake2')
        }
        console.error('stake3')
    }

    catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        
    }

    
};


const postHandler = (req, res) => {

    try {
        stakeholderService.post(req.body).then(function (result) {

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
        stakeholderService.put(req.body).then(function (result) {
            return res.status(result.status).send(result.data);

        }).catch(function (error) {
            return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
        });
    } catch (error) {
        return res.status(ERROR_CODES.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
};


module.exports = {
    stakeHolder : {
        [PATHS.STAKEHOLDER] : [{
            method : HTTP_METHODS.GET,
            handler :getHandler
        },
        {
            method : HTTP_METHODS.POST,
            handler : postHandler
        },
        {
            method : HTTP_METHODS.PUT,
            handler : putHandler
        }
    ],
    [PATHS.Stake_ID]: [{
        method:HTTP_METHODS.GET,
        handler : getHandler
    }]
    }
};