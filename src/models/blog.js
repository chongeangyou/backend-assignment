const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: { type:String, required: true },
    description: { type: String, required: true},
    status: { type: Boolean, required: true, default: true},
    createdDate: { type: Date, required: true, default: Date.now() },
})

const BlogModel = mongoose.model('Blogs', blogSchema)

module.exports = BlogModel