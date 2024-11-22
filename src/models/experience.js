const mongoose = require('mongoose')


const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    organization: { type: String, require: true },
    description: { type: String, required: true },
    fromDate: { type: Date },
    todDate: { type: Date},
    createdDate: { type: Date, required: true, default: Date.now() },
})

const ExperienceModel = mongoose.model('Experiences', experienceSchema)

module.exports = ExperienceModel