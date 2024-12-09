const express = require('express')
const { createExperience, getExperience, getExperienceById, updateExperience, deleteExperience } = require('../controller/experience')
const experienceRouter = express.Router()
const { permission } = require('../middlewares');
const { actions } = require('../models/permission');

experienceRouter.post('/', permission(actions.CREATE_EXPERIENCE), createExperience)
experienceRouter.get('/', getExperience),
experienceRouter.get('/:id', getExperienceById)
experienceRouter.put('/:id', permission(actions.EDIT_EXPERIENCE), updateExperience)
experienceRouter.delete('/:id', permission(actions.DELETE_EXPERIENCE), deleteExperience)

module.exports = experienceRouter