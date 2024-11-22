const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true,},
        price: {type: Number, required: true,}, 
        category: { type: String, required: true,},
        author: { type: String, required: true,},
        createdDate: { type: Date, required: true, default: Date.now() },
    }
)

const CourseModel = mongoose.model('Courses', courseSchema)

// const courses = [
//     {
//         id: '1',
//         title: 'HTML',
//         price: '12',
//         category: 'Code'
//     },
//     {
//         id: '2',
//         title: 'CSS',
//         price: '12',
//         category: 'Code'
//     },
//     {
//         id: '3',
//         title: 'JS',
//         price: '12',
//         category: 'Code'
//     }
// ]

module.exports = CourseModel;