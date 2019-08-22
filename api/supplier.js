/**
 * Created by Chamath Jeevan on 8/11/19.
 */
const {
    supplierService } = require('../service/SupplierService');
const {
    PATHS,
    HTTP_METHODS
} = require('../conf');
const JSON = require('circular-json');

console.error('------> 1');
const getHandler = (req, res) => {
    console.error('------> 2');
    try {
        console.error('------> 3');
        if (req.params.id !== null && typeof req.params.id !== 'undefined') {
            console.error('------> 4');
            supplierService.get(req.params.id).then(function (result) {
                const json = JSON.stringify(result.data);
                return res.send(json)
            }).catch(function (error) {
                console.error(error);
                const json = JSON.stringify(error);
                return res.status(500).send(json);
            });
        } else {
            console.error('------> 5');
        
            supplierService.getAll().then(function (result) {
                console.error('------> 6');
                const json = JSON.stringify(result.data);
                console.error('------> 7');
                return res.send(json)
            }).catch(function (error) {
                console.error('------> 61');
                console.error(error);
                console.error('------> 71');
                const json = JSON.stringify(error);
                console.error('------> 81');
                return res.status(500).send(json);
            });
        }
    } catch (error) {
        console.error('------> 10');
        console.error(error);
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

const postHandler = (req, res) => {

    try {
        supplierService.post(req.body).then(function (result) {
            const json = JSON.stringify(result);
            return res.send(json);
        }).catch(function (error) {
            console.error(error);
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        console.error(error);
        return res.status(500).send(json);
    }
};

const putHandler = (req, res) => {
    try {
        supplierService.put(req.body).then(function (result) {
            const json = JSON.stringify(result);
            return res.send(json);
        }).catch(function (error) {
            const json = JSON.stringify(error);
            return res.status(500).send(json);
        });
    } catch (error) {
        const json = JSON.stringify(error);
        return res.status(500).send(json);
    }
};

module.exports = {
    supplier: {
        [PATHS.SUPPLIER]: [{
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
        [PATHS.SUPPLIER_ID]: [{
            method: HTTP_METHODS.GET,
            handler: getHandler
        }]
    }
};