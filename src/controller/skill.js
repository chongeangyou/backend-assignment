const express = require('express')
const SkillModel = require('../models/skill')
const expressAsyncHandler = require('express-async-handler')
const { PaginationParameters } = require('mongoose-paginate-v2');


const createSkill = expressAsyncHandler(async(req, res) => {
    const skill = new SkillModel(req.body)
    const result = await skill.save()
    return res.json(result)
})

const getSkill = expressAsyncHandler(async (req, res) => {
    const options = new PaginationParameters(req).get()
    const result = await SkillModel.paginate(...options)
    return res.json(result)
})

const getSkillById = expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    const skill = await SkillModel.findById(id)
    return res.json(skill)
})

const updateSkill = expressAsyncHandler(async (req, res) =>{
    const id = req.params.id
    const skill = SkillModel.findById(id)
    const result = await skill.updateOne(req.body)
    return res.json({
        operation: 'Updated',
        item: result
    })
})

const deleteSkill = expressAsyncHandler(async (req, res) =>{
    const id = req.params.id
    const skill = SkillModel.findById(id)
    const result = await skill.deleteOne()
    return res.json({
        operation: 'Deleted',
        item: result
    })
})

module.exports = {
    createSkill,
    getSkill,
    getSkillById,
    updateSkill,
    deleteSkill,
}