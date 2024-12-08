const ExperienceModel = require("../models/experience")
const asyncHandler = require('express-async-handler')
const { PaginationParameters } = require('mongoose-paginate-v2');



const createExperience =  async (req, res) =>{
    const experience = req.body
    const newExperience =  new ExperienceModel(experience)
    const result = await newExperience.save()
    return res.json(result)
}

const getExperience = async (req, res) =>{
    // const experiences = await ExperienceModel.find()
    // const result = experiences
    const options = new PaginationParameters(req).get()
    const result = await ExperienceModel.paginate(...options)
    return (result)? res.json(result): res.json('No data retrieve')
}

const getExperienceById = asyncHandler(async (req, res) =>{
    const id = req.params.id
    const experience = await ExperienceModel.findById(id)
    const result = experience
    if(result){
        return res.json(result)
    }else{
        return res.json('this is no data')
    }
    
})

const updateExperience = asyncHandler(async(req, res) =>{
    const id = req.params.id
    const experience = ExperienceModel.findById(id)
    const result = await experience.updateOne(req.body)
    return res.json({
        operation: 'Updated',
        item: result
    })
})

const deleteExperience = asyncHandler(async(req, res) =>{
    const experience = ExperienceModel.findById(req.params.id)
    const result = await experience.deleteOne()
    return res.json(
        {
            operation: 'Delete Record',
            item: result
        }
    )
})


module.exports = {
    createExperience,
    getExperience,
    getExperienceById,
    updateExperience,
    deleteExperience
}