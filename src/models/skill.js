const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    percent: { type: Number, required: true },
    type: { type: String, required: true },
    createdDate: { type: Date, required: true, default: Date.now()},
})

skillSchema.plugin(mongoosePaginate)
skillSchema.index({
    name: 'text',
    type: 'text'
})


const SkillModel = mongoose.model('Skills', skillSchema)

module.exports = SkillModel