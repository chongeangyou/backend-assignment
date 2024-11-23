const express = require('express')
const { createBlog, getBlog, getBlogById, deleteBlog, updateBlog } = require('../controller/blog')
const blogRouter = express.Router()

blogRouter.post('/', createBlog)
blogRouter.get('/', getBlog)
blogRouter.get('/:id', getBlogById)
blogRouter.put('/:id', updateBlog)
blogRouter.delete('/:id', deleteBlog)

module.exports = blogRouter
