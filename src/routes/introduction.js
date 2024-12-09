const express = require('express')
const { createIntroduction, getIntroduction, getIntroductionById, updateIntroduction, deleteIntroduction } = require('../controller/introduction')
const introductionRouter = express.Router()
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');


introductionRouter.post('/',permission(actions.CREATE_INTRODUCTION), createIntroduction)
introductionRouter.get('/', getIntroduction)
introductionRouter.get('/:id', getIntroductionById)
introductionRouter.put('/:id', permission(actions.EDIT_INTRODUCTION), updateIntroduction)
introductionRouter.delete('/:id', permission(actions.DELETE_INTRODUCTION), deleteIntroduction)

module.exports = introductionRouter