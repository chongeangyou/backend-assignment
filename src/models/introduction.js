const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const introductionSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    bod: {type: Date, },
    yearOfProfession: {type: Number},
    freelance: {type: Boolean, default: true}
})

introductionSchema.plugin(mongoosePaginate)
introductionSchema.index({
    name: 'text',
    email: 'text'
})
const IntroductionModel = mongoose.model('Introductions', introductionSchema)

module.exports = IntroductionModel