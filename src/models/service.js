const mongoose = require('mongoose')
const { schema } = require('./experience')

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    detail: {type: String, required: true}
})

const ServiceModel = mongoose.model('Services', serviceSchema)

module.exports = ServiceModel