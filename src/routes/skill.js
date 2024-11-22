const express = require('express')
const { createSkill, getSkill, getSkillById, updateSkill, deleteSkill } = require('../controller/skill')
const skillRouter = express.Router()


skillRouter.post('/', createSkill)
skillRouter.get('/', getSkill)
skillRouter.get('/:id', getSkillById)
skillRouter.put('/:id', updateSkill)
skillRouter.delete('/:id', deleteSkill)

module.exports = skillRouter