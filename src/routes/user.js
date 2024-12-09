const express = require('express')
const { createUser, getUserById, getUsers, deleteUserById, updateUserById } = require('../controller/user')
const { permission } = require('../middlewares')
const { actions } = require('../models/permission');
const userRouter = express.Router()



userRouter.post('/',permission(actions.CREATE_USER), createUser)
userRouter.get('/', getUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/:id', permission(actions.EDIT_USER), updateUserById)
userRouter.delete('/:id', permission(actions.DELETE_USER), deleteUserById)



module.exports = userRouter
