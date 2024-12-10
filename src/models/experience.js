const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    organization: { type: String, require: true },
    description: { type: String, required: true },
    fromDate: { type: Date },
    toDate: { type: Date},
    createdDate: { type: Date, required: true, default: Date.now() },
})

experienceSchema.plugin(mongoosePaginate)
experienceSchema.index({
    title: 'text',
    type: 'text'
})

const ExperienceModel = mongoose.model('Experiences', experienceSchema)

module.exports = ExperienceModel