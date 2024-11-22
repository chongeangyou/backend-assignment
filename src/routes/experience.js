const express = require('express')
const { createExperience, getExperience, getExperienceById, updateExperience, deleteExperience } = require('../controller/experience')
const experienceRouter = express.Router()

experienceRouter.post('/', createExperience)
experienceRouter.get('/', getExperience),
experienceRouter.get('/:id', getExperienceById)
experienceRouter.put('/:id', updateExperience)
experienceRouter.delete('/:id', deleteExperience)

module.exports = experienceRouter