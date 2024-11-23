const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const BlogModel = require('../models/blog')

 const createBlog = expressAsyncHandler(async(req, res) => {
    const blog = new BlogModel(req.body)
    const result = await blog.save()
    return res.json(result)
 })

 const getBlog = expressAsyncHandler(async(req, res) => {
    const blogs = await BlogModel.find()
    return res.json(blogs)
 })

 const getBlogById = expressAsyncHandler(async(req, res) => {
    const id = req.params.id
    const blog = await BlogModel.findById(id)
    return res.json(blog)
 })

 const updateBlog = expressAsyncHandler(async(req, res) => {
    const id = req.params.id 
    const blog = BlogModel.findById(id)
    const result = await blog.updateOne(req.body)
    return res.json({
        operation: 'Updated',
        item: result
    })
 })

 const deleteBlog = expressAsyncHandler(async(req, res) => {
    const id = req.params.id
    const blog =  BlogModel.findById(id)
    const result = await blog.deleteOne()
    return res.json({
        operation: 'Deleted',
        item: result
    })
 })

 module.exports = {
    createBlog,
    getBlog,
    getBlogById,
    updateBlog,
    deleteBlog
 }