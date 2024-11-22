const express = require('express')
const { createUser, getUserById, getUsers, deleteUserById, updateUserById } = require('../controller/user')
const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)
userRouter.patch('/:id', updateUserById)


module.exports = userRouter
