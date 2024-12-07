//const express = require('express')
const { checkSchema } = require('express-validator')


const singUpSchema = checkSchema({
    email: {
        isEmail: true,
        errorMessage: 'Invalid email input'
    },
    firstname: {
        isAlpha: true,
        errorMessage: 'Firstname is text only'
    },
    lastname: {
        isAlpha: true,
        errorMessage: 'Lastname is text only'
    },
    password: {
        isLength: {
            options: {
                min: 5
            }
        },
        errorMessage: "Password should be at least 8 characters"
    },
    confirmPassword: {
        custom: {
            options: async (value, { req }) => {
                if (value != req.body.password) {
                    throw new Error("Password mistatched!")
                }
            }
        }
    }
})

const experienceSchema = checkSchema({
    title: {
        isAlpha: true,
        errorMessage: 'Title is available as text only'
    },
    type: {
        isAlpha: true,
        errorMessage: 'Tyoe must be in text'
    },
    organization: { 
        isAlpha: true,
        errorMessage: 'Organization is text only'
     },
    description: { 
        isAlpha: true,
     },
    fromDate: { },
    todDate: { },
})


module.exports = { singUpSchema, experienceSchema }
