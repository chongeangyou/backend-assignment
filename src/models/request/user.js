const Joi = require('@hapi/joi')
const { query } = require('express')

module.exports = {
    // creatNewUser
    0: {
        body: {
            firstname: Joi.string().required().default('CCC'),
            lastname: Joi.string().required().default('EEE'),
            email: Joi.string().required().default('user@gmail.com'),
            password: Joi.string().required().default('12345678'),
            confirmPassword: Joi.string().required().default('12345678'),
        },
        model: "createUser", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Creater new user"
    },
    1: {
        query: {
            limit: Joi.number().optional().default(10).description("Number of items to take"),
            page: Joi.number().optional().default(1),
            sort: Joi.string().optional(),
            query: Joi.string().optional(),
            populate: Joi.string().optional(),
            select: Joi.string().optional()
        },
        model: "GetAllUsers", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "get all up users"
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "User", // Swagger tag for apis.
        description: "Get User by Id"
       
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            username: Joi.string().required(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            confirmPassword: Joi.string().required(),
        },
        model: "UpdateUser",
        group: "User", // Swagger tag for apis.
        description: "Get Course by Id"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "User", // Swagger tag for apis.
        description: "Delete User by Id"
    },
    
}