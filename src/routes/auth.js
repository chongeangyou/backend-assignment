const express = require('express')
const authRouter = express.Router()
const {signUp, login} = require('../controller/auth')
const { singUpSchema } = require('../common/validator/index')
const  { handleValidation } = require('../middlewares/index')

authRouter.post('/sign-up',singUpSchema, handleValidation,  signUp)
authRouter.post('/login', login)

module.exports = authRouter