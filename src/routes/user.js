const express = require('express')
const { createUser, getUserById, getUsers, deleteUserById, updateUserById } = require('../controller/user')
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');
const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', permission(actions.READ_USER), getUsers)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)
userRouter.patch('/:id', updateUserById)


module.exports = userRouter
