const express = require('express')
const { createIntroduction, getIntroduction, getIntroductionById, updateIntroduction, deleteIntroduction } = require('../controller/introduction')
const introductionRouter = express.Router()

introductionRouter.post('/', createIntroduction)
introductionRouter.get('/', getIntroduction)
introductionRouter.get('/:id', getIntroductionById)
introductionRouter.put('/:id', updateIntroduction)
introductionRouter.delete('/:id', deleteIntroduction)

module.exports = introductionRouter