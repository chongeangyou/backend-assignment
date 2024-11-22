const express = require('express')
const bookRouter = express.Router()
const {createBook, getBooks, getBookById} = require('../controller/book')

bookRouter.post('/', createBook)
bookRouter.get('/', getBooks)
bookRouter.get('/:id', getBookById)

module.exports = bookRouter