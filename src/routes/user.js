const express = require('express')
const { createUser, getUserById, getUsers, deleteUserById, updateUserById } = require('../controller/user')
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');
const userRouter = express.Router()



userRouter.post('/',permission(actions.CREATE_USER), createUser)
userRouter.get('/', permission(actions.READ_USER), getUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/:id', updateUserById)
userRouter.delete('/:id', deleteUserById)



module.exports = userRouter
