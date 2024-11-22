const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const ServiceModel = require('../models/service')

const createService = expressAsyncHandler(async (req, res) => {
    const service = new ServiceModel(req.body)
    const result = await service.save()
    return res.json(result)
})

const getService = expressAsyncHandler(async (req, res) => {
    const services = await ServiceModel.find()
    return res.json(services)
})

const getServiceById = expressAsyncHandler(async(req, res) => {
    const id = req.params.id
    const service = await ServiceModel.findById(id)
    return res.json(service)
})

const updateService = expressAsyncHandler(async(req, res) => {
    const id = req.params.id
    const service = ServiceModel.findById(id)
    const result = await service.updateOne(req.body)
    return res.json({
        opt: 'Updated',
        item: result
    })
})

const deleteService = expressAsyncHandler(async(req, res) => {
    const service = ServiceModel.findById(req.params.id)
    const result = await service.deleteOne()
    return res.json({
        opt: 'Deleted',
        item: result
    })
})

module.exports = {
    createService,
    getService,
    getServiceById,
    updateService,
    deleteService
}