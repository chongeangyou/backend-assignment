const CourseModel = require('../models/course.js')
//const courseModel = require('../models/course.js')
const asyncHandler = require('express-async-handler')


// async function createCourse(req, res) {
//     // const addCourse = {
//     //     id: req.body.id,
//     //     title: req.body.title,
//     //     price: req.body.price,
//     //     category: req.body.category
//     // }
    
//     // const exist = courses.some((item) => {
//     //     return item.id == addCourse.id
//     // })
//     // if (exist) {
//     //     return res.status(400).json('this course has already')
//     // }
//     // courses.push(addCourse)
//     // return res.json({
//     //     operation: 'Success',
//     //     item: addCourse
//     // })

//     const addCourse = {
//         title: req.body.title, 
//         price: req.body.price, 
//         category: req.body.category, 
//         author: req.body.author,
//     }
//     const course = new CourseModel(addCourse);
//     const result = await course.save();
//     console.log("add data success:", result)
//     return res.json(result)
// }

const createCourse = asyncHandler(async (req, res) => {
    const newCourse = new CourseModel(req.body); 
    const result = await newCourse.save();
    return res.json(result);
})

// function getCourstById(req, res) {
//     const id = req.params.id
//     const course = courses.find((item) => {
//         return item.id == id
//     })
//     return res.json(course)
// }

const getCourstById = asyncHandler(async (req, res) => {
    const course = await CourseModel.findById(req.params.id)
    return res.json(course)
})
 
const getCourse = asyncHandler(async(req, res) => {
    const courses = await CourseModel.find();
    console.log(courses);
    return res.json(courses)
})



const deleteCourse = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await CourseModel.deleteOne({_id: id})
    return res.json({
        operation: 'Delete data',
        item: result
        }
    )
})

const editCourse = asyncHandler(async (req, res) => {
    const id = req.params.id
    //const result = await CourseModel.updateOne({...req.body, id})
    const result = await CourseModel.updateOne({_id: id}, req.body )
    return res.json({
        operation: "Update record success",
        item: result
    })
})

// function editCourse(req, res) {
//     // console.log(req.params.id)
//     const parmId = req.params.id
//     const reqId = req.body.id
//     if (parmId == reqId) {
//         //const id = req.body.id
//         const id = req.params.id
//         const course = courses.find((item) => {
//             return item.id == id
//         })
//         if (course) {
//             // const index = courses.findIndex((item) => {
//             //     return item == course
//             // })
//             // course.id = req.body.id
//             course.title = req.body.title
//             course.price = req.body.price
//             course.category = req.body.category
//             console.log(course);
//             // course[index] = {
//             //     id: req.body.id,
//             //     title: req.body.title,
//             //     price: req.body.price,
//             //     category: req.body.category
//             // }
//             // console.log(courses[index])
//         }
//         return res.json({
//             operation: "Update Success",
//             item: courses
//         })
//     } else {
//         return res.status(404).json('Your record update not found')
//     }
// }

module.exports = { createCourse, getCourstById, getCourse, deleteCourse, editCourse };