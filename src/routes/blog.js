const express = require('express')
const { createBlog, getBlog, getBlogById, deleteBlog, updateBlog } = require('../controller/blog')
const blogRouter = express.Router()
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');

blogRouter.post('/', permission(actions.CREATE_BLOG),createBlog)
blogRouter.get('/', getBlog)
blogRouter.get('/:id', getBlogById)
blogRouter.put('/:id', permission(actions.EDIT_BLOG), updateBlog)
blogRouter.delete('/:id', permission(actions.DELETE_BLOG), deleteBlog)

module.exports = blogRouter
