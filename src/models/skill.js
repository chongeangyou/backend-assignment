const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    percent: { type: Number, required: true },
    type: { type: String, required: true },
    createdDate: { type: Date, required: true, default: Date.now()},
})

const SkillModel = mongoose.model('Skills', skillSchema)

module.exports = SkillModel