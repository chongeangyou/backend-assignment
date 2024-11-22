const express = require('express')
const {createCourse, getCourstById, getCourse, deleteCourse, editCourse } = require('../controller/course.js')
const courseRouter = express.Router()

courseRouter.post('/', createCourse)
courseRouter.get('/', getCourse)
courseRouter.get('/:id', getCourstById)
courseRouter.delete('/:id', deleteCourse)
courseRouter.patch('/:id', editCourse)

module.exports = courseRouter