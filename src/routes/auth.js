const express = require('express')
const authRouter = express.Router()
const {signUp, login, exchangeRefreshToken} = require('../controller/auth')
const { singUpSchema } = require('../common/validator/index')
const  { handleValidation, verifyRefresh } = require('../middlewares/index')

authRouter.post('/sign-up',singUpSchema, handleValidation,  signUp)
authRouter.post('/login', login)
authRouter.get('/refresh', verifyRefresh, exchangeRefreshToken)

module.exports = authRouter