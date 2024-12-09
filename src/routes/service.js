const express = require('express')
const { createService, getService, getServiceById, updateService, deleteService } = require('../controller/service')
const serviceRouter = express.Router()
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');


serviceRouter.post('/',permission(actions.CREATE_SERVICE), createService)
serviceRouter.get('/', getService)
serviceRouter.get('/:id', getServiceById)
serviceRouter.put('/:id', permission(actions.EDIT_SERVICE), updateService)
serviceRouter.delete('/:id', permission(actions.DELETE_SERVICE), deleteService)

module.exports = serviceRouter