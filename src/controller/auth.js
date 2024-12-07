const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const signJWT = require('../utils/index')

const signUp = asyncHandler(async (req, res) =>{
    const {firstname, lastname, email, password, confirmPassword} = req.body
    if(password !== confirmPassword){
        throw new Error('Password not match');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const username = Date.now() + firstname
    const user = new UserModel({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
    })

   // console.log(user);

    const result = await user.save()
    console.log(typeof (result))
    result.password = ''
    return res.json(result)
})

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await UserModel.findOne({email: email})
    if(!user){
        return res.status(404).json("User not found")
    }
    const compareResult = await bcrypt.compare(password, user.password)
    if(!compareResult){
        return res.status(401).json('Usernmae or Password Incorrect')
    }
    // Sign JWT Token
    const token = signJWT(user._id, user.email, user.username)

    //save refresh token
    const hashedToken = await bcrypt.hash(token.refreshToken, 10)
    user.refreshToken = hashedToken
    user.save()

    return res.json(token)
    //return res.json({ token })
})

const exchangeRefreshToken = asyncHandler(async (req, res) => {
    // Validate Refresh Token
    console.log(req.user)
    console.log('Hllo')
    const encodedToken = req.user.extract
    const compareResult = await bcrypt.compare(encodedToken, req.user.refreshToken)
    if (!compareResult) {
        return res.status(401).json("Incorrect token")
    }
    // Sign JWT Token
    const token = signJWT(req.user._id, req.user.email, req.user.username)
    // Save refresh in database
    const hashedToken = await bcrypt.hash(token.refreshToken, 10)
    const user = await UserModel.findById(req.user._id)
    user.refreshToken = hashedToken
    user.save()
    // req.user.refreshToken = hashedToken
    // req.user.save()
    return res.json(token)
})



module.exports = { signUp, login, exchangeRefreshToken }
