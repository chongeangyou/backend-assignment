const mongoose = require('mongoose')

const introductionSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    bod: {type: Date, },
    yearOfProfession: {type: Number},
    freelance: {type: Boolean, default: true}
})

const IntroductionModel = mongoose.model('Introductions', introductionSchema)

module.exports = IntroductionModel