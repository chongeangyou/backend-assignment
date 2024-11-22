const asyncHandler = require('express-async-handler')
const BooKModel = require('../models/book.js')




async function createBook(req, res) {
    const newBook = {
        title: req.body.title,
        price: req.body.price,
        author: req.body.author
    }
    console.log(newBook);  

    const book = new BooKModel(newBook);
    const result = await book.save();
    console.log(result)
    return res.json(result)
}

const getBooks = asyncHandler(async (req, res) => {
    const { join } = req.query
    const books = await BooKModel.find().populate(join)
    return res.json(books)
})

const getBookById = asyncHandler(async (req, res) =>{
    const id = req.params.id
    const book = await BooKModel.findById({_id: id})
    return res.json(book)
})


module.exports = {createBook, getBooks, getBookById} 