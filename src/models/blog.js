const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const blogSchema = mongoose.Schema({
    title: { type:String, required: true },
    description: { type: String, required: true},
    status: { type: Boolean, required: true, default: true},
    createdDate: { type: Date, required: true, default: Date.now() },
})

blogSchema.plugin(mongoosePaginate)
blogSchema.index({
    title: 'text',
    description: 'text'
})
const BlogModel = mongoose.model('Blogs', blogSchema)

module.exports = BlogModel