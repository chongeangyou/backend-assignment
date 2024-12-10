const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.js')
const { PaginationParameters } = require('mongoose-paginate-v2');
const bcrypt = require('bcrypt');
const { response } = require('express');

const createUser = asyncHandler(async (req, res) => {
    // const user = new UserModel(req.body)
    // const result = await user.save()
    // return res.json(result)

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

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    console.log(user);
    // if(user){
    //     return res.json(user)
    // }else{
    //     return res.json('there no data available')
    // }
    return (user)? res.json(user): res.json("there no datar available")
})

const getUsers = asyncHandler(async (req, res) => {
    const options = new PaginationParameters(req).get()
    const users = await UserModel.paginate(...options)
    return (users)? res.json(users): res.json('No data retrieve')
})

const updateUserById = asyncHandler(async (req, res) => {
    const {username, firstname, lastname, email, password, confirmPassword} = req.body
    if(password !== confirmPassword){
        throw new Error('Password not match');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const id = req.params.id
    const user = await UserModel.findById(id);
    const result = await user.updateOne( {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword
    })
    return res.json(result)
})
const deleteUserById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await UserModel.deleteOne({ _id: id })
    return (result)? res.json(result): res.json('No data deleted')

})

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUserById,
    updateUserById
}