const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.js')
const { PaginationParameters } = require('mongoose-paginate-v2');

const createUser = asyncHandler(async (req, res) => {
    const user = new UserModel(req.body)
    const result = await user.save()
    return res.json(result)
})

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById({_id: id})
    console.log('dd');
    return res.json(user)
})

const getUsers = asyncHandler(async (req, res) => {
    const users = await UserModel.find()
    return res.json(users)
})

const deleteUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.deleteOne({ _id: id })
    return res.json(result)
})

const updateUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUserById,
    updateUserById
}