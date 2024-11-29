const express = require('express')
const { createExperience, getExperience, getExperienceById, updateExperience, deleteExperience } = require('../controller/experience')
const experienceRouter = express.Router()
const { permission } = require('../middlewares');
const { actions } = require('../models/permission');

experienceRouter.post('/', permission(actions.CREATE_EXPERIENCE), createExperience)
experienceRouter.get('/', permission(actions.READ_EXPERIENCE), getExperience),
experienceRouter.get('/:id', getExperienceById)
experienceRouter.put('/:id', updateExperience)
experienceRouter.delete('/:id', deleteExperience)

module.exports = experienceRouter