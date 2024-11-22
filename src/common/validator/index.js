//const express = require('express')
const { checkSchema } = require('express-validator')
const { schema } = require('../../models/course')

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

const bookSchema = checkSchema({
    title: {
        isAlpha: true,
        errorMessage: 'Title needs text only'
    },
    pages: {
        isNumeric: true,
        isLength: {
            min: 2,
            errorMessage: 'Pages is more that 1 digit'
        },
        errorMessage: 'Page is number only'
    }
})


module.exports = { singUpSchema }
