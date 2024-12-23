const express = require('express')
const asyncHandler = require('express-async-handler')
const IntroductionModel = require('../models/introduction')
const { PaginationParameters } = require('mongoose-paginate-v2');

const createIntroduction = asyncHandler(async(req, res) => {
    const introduction = new IntroductionModel(req.body)
    const result = await introduction.save()
    return res.json(result)
})

const getIntroduction = asyncHandler(async (req, res) => {
    const options = new PaginationParameters(req).get()
    const result = await IntroductionModel.paginate(...options)
    return (result)? res.json(result): res.json('No data response')
})

const getIntroductionById = asyncHandler(async(req, res) => {
    const id = req.params.id
    const intro = await IntroductionModel.findById(id)
    return (intro)? res.json(intro): res.json('No data response')
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