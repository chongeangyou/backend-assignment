const express = require('express')
const asyncHandler = require('express-async-handler')
const IntroductionModel = require('../models/introduction')

const createIntroduction = asyncHandler(async(req, res) => {
    const introduction = new IntroductionModel(req.body)
    const result = await introduction.save()
    return res.json(result)
})

const getIntroduction = asyncHandler(async (req, res) => {
    const introduction = await IntroductionModel.find()
    return res.json(introduction)
})

const getIntroductionById = asyncHandler(async(req, res) => {
    const id = req.params.id
    const intro = await IntroductionModel.findById(id)
    return res.json(intro)
})

const updateIntroduction = asyncHandler(async(req, res) => {
    const id = req.params.id
    const intro = IntroductionModel.findById(id)
    const result = await intro.updateOne(req.body)
    return res.json({
        operation: 'Updated',
        item: result
    })
})

const deleteIntroduction = asyncHandler(async(req, res) =>{
    const id = req.params.id
    const intro = IntroductionModel.findById(id)
    const result = await intro.deleteOne(req.body)
    return res.json({
        operation: 'Deleted',
        item: result
    })
})

module.exports = {
    createIntroduction,
    getIntroduction,
    getIntroductionById,
    updateIntroduction,
    deleteIntroduction
}