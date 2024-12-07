const Joi = require('@hapi/joi')

module.exports = {
    0: {
        body: {
            name: Joi.string().required().default('CCC'),
            phone: Joi.number().required().default(12345678),
            email: Joi.string().required().default('assignment@gmail.com'),
            bod: Joi.date().required().default('1900-12-12'),
            yearOfProfession: Joi.number().required().default(10),
            freelance: Joi.boolean().required().default(true)
        },
        model: "createIntroduction", // Name of the model
        group: "Introduction", // Swagger tag for apis.
        description: "Create the Introduction and save details in database"
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
        model: "getAllIntroduction",
        group: 'Introduction',
        description: 'Get all Introduction'
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "Introduction", // Swagger tag for apis.
        description: "Get Introduction by Id"
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            name: Joi.string().optional(),
            phone: Joi.number().optional(),
            email: Joi.string().optional(),
            bod: Joi.date().optional(),
            yearOfProfession: Joi.number().optional(),
            freelance: Joi.boolean().optional()
        },
        model: "updateIntroduction", // Name of the model
        group: "Introduction", // Swagger tag for apis.
        description: "Update Introduction and save details in database"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "Introduction", // Swagger tag for apis.
        description: "Delete Introduction by Id"
    },
    
}