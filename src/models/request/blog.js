const Joi = require('@hapi/joi')

module.exports = {
    0: {
        body: {
            title: Joi.string().required().default('Web3 is popular'),
            description: Joi.string().required().default("web 3 is mordern website"),
            status: Joi.boolean().required().default(true),
        },
        model: "createBlog", // Name of the model
        group: "Blog", // Swagger tag for apis.
        description: "Create the Blog and save details in database"
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
        model: "getAllBlog",
        group: 'Blog',
        description: 'Get all blog'
    },
    2: {
        path: {
            id: Joi.string().required()
        },
        group: "Blog", // Swagger tag for apis.
        description: "Get blog by Id"
    },
    3: {
        path: {
            id: Joi.string().required()
        },
        body: {
            title: Joi.string().required().optional(),
            description: Joi.string().required().optional(),
            status: Joi.boolean().required().optional(),
        },
        model: "updateBlog", // Name of the model
        group: "Blog", // Swagger tag for apis.
        description: "Update Blog and save details in database"
    },
    4: {
        path: {
            id: Joi.string().required()
        },
        group: "Blog", // Swagger tag for apis.
        description: "Delete blog by Id"
    },
    
}