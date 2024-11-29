const { type } = require('@hapi/joi/lib/extend')
const mongoose = require('mongoose')
const { roles } = require('./permission')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true, default: Date.now()},
    password: { type: String, },
    permission: {
        type: String, enum: [
            roles.ADMIN.role,
            roles.USER.role,
            roles.GUEST.role],
        default: roles.USER.role
    }
})

const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel