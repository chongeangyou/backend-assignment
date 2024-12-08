const { type } = require('@hapi/joi/lib/extend')
const mongoose = require('mongoose')
const { roles } = require('./permission')
const mongoosePaginate = require('mongoose-paginate-v2')


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    createdDate: { type: Date, required: true, default: Date.now()},
    password: { type: String, },
    refreshToken: { type: String},
    permission: {
        type: String, enum: [
            roles.ADMIN.role,
            roles.USER.role,
            roles.GUEST.role],
        default: roles.USER.role
    }
})

userSchema.plugin(mongoosePaginate)
userSchema.index({
    firstname:'text',
    lastname:'text',
    email:'text'
})
const UserModel = mongoose.model('Users', userSchema)

module.exports = UserModel